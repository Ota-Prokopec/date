'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '../shadcn/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../shadcn/command';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/popover';

type Item<ValueType extends string> = { value: ValueType; label: string };

export type ComboInputProps<ValueType extends string> = {
  items: Item<ValueType>[];
  title: string;
  notFoundText: string;
  onChange: (value: ValueType) => void;
};

export const ComboInput = <ValueType extends string>({
  items,
  title,
  notFoundText,
  onChange,
}: ComboInputProps<ValueType>) => {
  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState<ValueType | null>(null);

  React.useEffect(() => {
    if (currentValue) onChange(currentValue);
  }, [currentValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-auto justify-between">
          {currentValue ? items.find((item) => item.value === currentValue)?.label : title}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white dark:bg-black">
        <Command className="w-full">
          <CommandInput placeholder={title} />
          <CommandList className="w-full">
            <CommandEmpty>{notFoundText}</CommandEmpty>
            <CommandGroup className="w-full">
              {items.map((item) => (
                <CommandItem
                  className="w-full"
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setCurrentValue(currentValue as ValueType);
                    setOpen(false);
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', currentValue === item.value ? 'opacity-100' : 'opacity-0')} />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
