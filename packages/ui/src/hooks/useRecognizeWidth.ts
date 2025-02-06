'use client';

import { device } from '@repo/utils/common/device';

import { useEffect, useState } from 'react';

export type UseRecognizeWidthPayload = {
  pageWidth: ReturnType<typeof device.recognizeWidth>;
};

export const useRecognizeWidth = (): UseRecognizeWidthPayload => {
  const [pageWidth, setPageWidth] = useState<ReturnType<typeof device.recognizeWidth>>(null);

  useEffect(() => {
    setPageWidth(device.recognizeWidth());

    const resizeHandler = () => setPageWidth(device.recognizeWidth());
    addEventListener('resize', resizeHandler);

    return () => removeEventListener('resize', resizeHandler);
  }, []);

  return { pageWidth };
};
