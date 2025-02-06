'use client';

import { useEffect, useState } from 'react';

type UseQueryProps<TData extends unknown> = {
  query: () => Promise<TData>;
  variables: any[];
  initialData?: TData;
};

export const useQuery = <TData extends unknown>({ query, variables, initialData }: UseQueryProps<TData>) => {
  const [data, setData] = useState<TData | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(initialData ? false : false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    try {
      setIsLoading(true);
      setData(await query());
    } catch (error) {
      setError(new Error('Something went wrong'));
      throw error;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refetch();
  }, variables);

  return {
    refetch,
    isLoading,
    error,
    data,
  };
};
