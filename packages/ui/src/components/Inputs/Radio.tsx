import { useEffect, useState, type ReactNode } from 'react';
import { Label } from '../shadcn/label';
import { RadioGroup, RadioGroupItem } from '../shadcn/radio-group';
import { cn } from '@/lib/utils';

export type RadioItem<Key extends string, Value extends string> = {
  key: Key;
  value: Value;
};
type RadioProps<Key extends string, Value extends string> = {
  items: RadioItem<Key, Value>[];
  getRadio: (key: Key) => ReactNode;
  onChange?: (chosenKey: Key | undefined) => void;
  defaulOption?: Key;
  className?: string;
  selectedOption?: Key;
};

export const Radio = <Key extends string, Value extends string>({
  items,
  getRadio,
  defaulOption,
  onChange,
  className,
  selectedOption,
}: RadioProps<Key, Value>) => {
  return (
    <RadioGroup
      value={selectedOption}
      className={cn('w-min h-min flex flex-col', className)}
      defaultValue={defaulOption}
    >
      {items.map((item) => {
        return (
          <div key={item.key} className="flex items-center w-min h-min">
            <RadioGroupItem
              className="hidden"
              onClick={() => {
                if (onChange) onChange(item.key);
              }}
              value={item.key}
              id={item.key}
            />
            <Label className="cursor-pointer" htmlFor={item.key}>
              {getRadio(item.key)}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};
