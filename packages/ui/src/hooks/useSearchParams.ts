'use client';

import { useEffect, useState } from 'react';
import { z, ZodString } from 'zod';

export const useSearchParams = <TZodSchema extends ZodString>(name: string, zodSchema: TZodSchema) => {
  const initialValue = new URL(location.href).searchParams.get(name);
  const [state, setState] = useState<z.infer<TZodSchema> | null>(initialValue ? zodSchema.parse(initialValue) : null);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (!state) return () => {};
    url.searchParams.set(name, state);
    history.replaceState({}, '', url);
  }, [state]);

  return [state, setState] as const;
};
