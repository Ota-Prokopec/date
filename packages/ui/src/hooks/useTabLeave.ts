'use client';

import { useEffect, useState } from 'react';

export const useTabActivity = () => {
  const [isTabActive, setIsTabActive] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener('blur', () => setIsTabActive(false));
    window.addEventListener('focus', () => setIsTabActive(true));
  }, []);

  return { isTabActive };
};
