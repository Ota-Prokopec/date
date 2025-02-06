import { useEffect } from 'react';
import { Row } from './Row';
import { useCountdown } from 'usehooks-ts';
import { match } from 'ts-pattern';

type CountDownProps = {
  date: Date;
  interval?: number;
};

export const Countdown = ({ date, interval = 1000 }: CountDownProps) => {
  const timeLeft = Math.floor((date.getTime() - new Date(Date.now()).getTime()) / interval); // in interval

  const [countdown, countdownActions] = useCountdown({ countStart: timeLeft, countStop: 0, intervalMs: interval });

  useEffect(() => {
    countdownActions.startCountdown();
  }, []);

  const hours = Math.floor((countdown / 60 / 60) * (1000 / interval));
  const minutes = Math.floor((countdown / 60) * (1000 / interval) - hours * 60);
  const seconds = Math.floor(countdown * (1000 / interval) - minutes * 60 - hours * 60 * 60);

  return (
    <Row className="gap-4">
      {<CountdownItem value={hours} title="hours"></CountdownItem>}
      {<CountdownItem value={minutes} title="minutes"></CountdownItem>}
      {<CountdownItem value={seconds} title="seconds"></CountdownItem>}
    </Row>
  );
};

type CountdownItemProps = {
  value: number;
  title: string;
};
const CountdownItem = ({ value, title }: CountdownItemProps) => {
  return (
    <div className="flex flex-col bg-neutral rounded-box text-neutral-content p-3">
      <span className="font-mono text-5xl justify-center items-center flex">
        <span className="text-center">{value}</span>
      </span>
      {title}
    </div>
  );
};
