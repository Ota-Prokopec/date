'use client';

import { Timer } from '@repo/ui/dist/components/common/Timer';

const MainPage = () => {
  return <Timer timeLeft={30} wholeTime={60}></Timer>;
};

export default MainPage;
