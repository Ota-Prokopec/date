'use client';

import { Column } from '@repo/ui/components/common/Column';
import { Text } from '@repo/ui/components/common/Text';
import { normalizeTime } from '@repo/utils/normalizators/normalizeTime';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export type TimerProps = {
  wholeTime: number;
  timeLeft: number;
};

export const Timer = ({ wholeTime, timeLeft }: TimerProps) => {
  return (
    <CountdownCircleTimer
      isPlaying
      initialRemainingTime={timeLeft}
      duration={wholeTime}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
    >
      {({ remainingTime }) => {
        const { days, hours, seconds, minutes } = normalizeTime(remainingTime);
        const text = days
          ? 'days'
          : hours
            ? 'hours'
            : minutes
              ? 'minutes'
              : seconds
                ? 'seconds'
                : '';
        return (
          <Column className="items-center justify-center  ">
            <Text className="font-bold text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              {days || hours || minutes || seconds}
            </Text>
            <Text className="font-bold">{text}</Text>
          </Column>
        );
      }}
    </CountdownCircleTimer>
  );
};
