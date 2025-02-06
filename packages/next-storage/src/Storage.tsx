'use client';

import {
  createContext,
  type Dispatch,
  type Context as ReactContext,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { z, ZodSchema } from 'zod';
import { getCookieStorageData, removeCookieItem, setCookieItem } from './cookieStorageHandler';
import { getLocalStorageData, removeLocalStorageItem, setLocalStorageItem } from './localStorageHandler';
import { useDeepCompareEffect } from './DeepCompareEffect';

export type Type = 'cookies' | 'localstorage';
type ZodObject = z.ZodObject<Record<string, ZodSchema>>;

type GetStorageProps<TZodSchema extends ZodObject> = {
  zodSchema: TZodSchema;
  type: Type;
};
type ZodSchemaType<TZodSchema extends ZodObject> = z.infer<TZodSchema>;

type ContextPayload<TZodSchema extends ZodObject> = {
  storage: NonNullable<ZodSchemaType<TZodSchema>>;
  setStorage: Dispatch<SetStateAction<NonNullable<ZodSchemaType<TZodSchema>>>>;
} | null;

type ProviderProps<TZodSchema extends ZodObject> = {
  children: ReactNode;
  initialData?: ZodSchemaType<TZodSchema>;
};

export class Storage<TZodSchema extends ZodObject> {
  public Context: ReactContext<ContextPayload<TZodSchema>>;
  public zodSchema: ZodSchemaType<TZodSchema> = z.object({});
  public type: Type = 'localstorage';

  constructor({ zodSchema, type }: GetStorageProps<TZodSchema>) {
    this.Context = createContext<ContextPayload<TZodSchema>>(null);
    this.zodSchema = zodSchema;
    this.type = type;
  }

  public useStorageContext = () => {
    const contextValue = useContext(this.Context);
    if (!contextValue) throw new Error('Context has to be used within the context provider');
    return contextValue;
  };

  public useStorageValue = <TName extends keyof ZodSchemaType<TZodSchema>>(name: TName) => {
    const { setStorage, storage } = this.useStorageContext();

    const setValue = (
      x:
        | ZodSchemaType<TZodSchema>[TName]
        | ((currentValue: ZodSchemaType<TZodSchema>[TName]) => ZodSchemaType<TZodSchema>[TName])
    ) => {
      setStorage((c) => {
        //@ts-ignore
        const value = typeof x === 'function' ? x(c[name]) : x;

        return { ...c, ...{ [name]: value } };
      });
    };

    return [storage[name], setValue] as const;
  };

  public StorageContextProvider = ({ children, initialData }: ProviderProps<TZodSchema>) => {
    const [storagePayloadState, setStoragePayloadState] = useState<ZodSchemaType<TZodSchema>>(
      this.zodSchema.parse(initialData || {})
    );

    useEffect(() => {
      setStoragePayloadState(this.zodSchema.parse(getStorageData(this.type)));
    }, []);

    useDeepCompareEffect(() => {
      const storageData = getStorageData(this.type);

      if (!storagePayloadState) return () => {};

      const input = [this.zodSchema.parse(storageData), this.zodSchema.parse(storagePayloadState)] as const;

      if (!input[0] || !input[1]) return () => {};

      const changes = compareObjects(...input);

      Object.entries(changes).map(([key, operation]) => {
        const value = storagePayloadState[key];
        if (operation === 'changed') setStorageItem(key, value, this.type);
        else if (operation === 'removed') removeStorageItem(key, value);
      });
    }, [typeof storagePayloadState === 'object' ? storagePayloadState : {}]);

    return (
      <this.Context.Provider
        value={{
          storage: storagePayloadState,
          setStorage: setStoragePayloadState,
        }}
      >
        {children}
      </this.Context.Provider>
    );
  };

  public proxyStorage = () => {
    return new Proxy<ZodSchemaType<TZodSchema>>(
      this.zodSchema.parse(typeof window !== 'undefined' ? getStorageData(this.type) : {}),
      {
        get: (target, prop) => {
          return target[prop.toString()];
        },
      }
    );
  };
}

const setStorageItem = (key: string, value: string, type: Type) => {
  if (type === 'cookies') setCookieItem(key, value);
  else setLocalStorageItem(key, value);
};

const removeStorageItem = (key: string, type: Type) => {
  if (type === 'cookies') removeCookieItem(key);
  else removeLocalStorageItem(key);
};

const getStorageData = (type: Type) => {
  return type === 'localstorage' ? getLocalStorageData() : getCookieStorageData();
};

const compareObjects = <TObject1 extends Record<string, unknown>, TObject2 extends Record<string, unknown>>(
  object1: TObject1,
  object2: TObject2
) => {
  return Object.entries(object2)
    .map(([key, value]) => {
      if (JSON.stringify(value) === JSON.stringify(object1[key])) return { [key]: 'unchanged' } as const;
      else {
        if ((object1[key] && object2[key]) || object2[key]) return { [key]: 'changed' } as const;
        else return { [key]: 'removed' } as const;
      }
    })
    .reduce<Record<string, 'unchanged' | 'changed' | 'removed'>>(
      (a, v) => ({
        ...a,
        ...v,
      }),
      {}
    );
};
