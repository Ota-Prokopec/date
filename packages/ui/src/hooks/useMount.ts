'use client';

import { useEffect, useState } from 'react';

export const useMount = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => setIsMounted(true), []);
  return {
    isMounted,
    isFirstRender: !isMounted,
  };
};
