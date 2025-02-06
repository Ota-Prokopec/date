'use client';

import { useEffect, useState } from 'react';

type PaginatorProps<TData extends unknown[], QueryParams extends any> = {
  query: (queryParams: QueryParams, dataArray: TData | undefined) => Promise<TData>;
  initialData?: TData | undefined;
  initialQueryParams: QueryParams;
  getNextPageQueryParams: (currentQueryParams: QueryParams) => QueryParams;
  initialFetch?: boolean;
};

export const usePaginator = <TData extends unknown[], QueryParams extends any>({
  query,
  initialData,
  initialQueryParams,
  getNextPageQueryParams,
  initialFetch = true,
}: PaginatorProps<TData, QueryParams>) => {
  const [dataArray, setDataArray] = useState<TData | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(initialFetch);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [queryParams, setQueryParams] = useState<QueryParams>(initialQueryParams);
  const [isLazyRefetchLoading, setIsLazyRefetchLoading] = useState<boolean>(false);

  const callQuery = async (currentQueryParams: QueryParams): Promise<TData> => {
    let res: null | TData;
    try {
      res = await query(currentQueryParams, dataArray);
    } catch (error) {
      if (error instanceof Error) setError(error);
      throw error;
    }
    return res;
  };

  const refetch = async () => {
    try {
      setIsLoading(true);
      setQueryParams(initialQueryParams);
      setDataArray(await callQuery(initialQueryParams));
    } catch (error) {}
    setIsLoading(false);
  };
  const fetchNextPage = () => {
    setQueryParams((currentParams) => {
      setIsLoading(true);
      setIsLoadingNextPage(true);

      const newParams = getNextPageQueryParams(currentParams);

      callQuery(newParams)
        .then((res) => {
          //@ts-expect-error
          setDataArray((c) => [...(c || []), ...res]);
          setIsLoadingNextPage(false);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoadingNextPage(false);
          setIsLoading(false);
        });

      return newParams;
    });
  };

  useEffect(() => {
    if (initialFetch) refetch();
  }, []);

  const lazyRefetch = async (currentDataArray: TData, preservedItemsCount: number = 1) => {
    try {
      setIsLazyRefetchLoading(true);
      setQueryParams(initialQueryParams);
      const newDataArray = await callQuery(initialQueryParams);
      const preservedItems = currentDataArray?.slice(0, preservedItemsCount);

      //@ts-ignore
      setDataArray((c) => {
        return preservedItems?.length ? [...preservedItems, ...newDataArray] : newDataArray;
      });
    } catch {}
    setIsLazyRefetchLoading(false);
  };

  return {
    dataArray,
    refetch,
    fetchNextPage,
    queryParams,
    error,
    lazyRefetch,
    isLazyRefetchLoading,
    isLoadingNextPage,
    setDataArray,
    isLoading,
  };
};
