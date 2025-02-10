import type { Gender } from '@repo/ts-types';
import { Card } from '@repo/ui/components/common/Card';
import { Radio, type RadioItem } from '@repo/ui/components/Inputs/Radio';
import { match } from 'ts-pattern';
import { useEffect, useState } from 'react';
import { cn } from '@repo/ui/lib/utils';
import { IconFemale, IconMale } from '../Icons';

const radioGenders: RadioItem<Gender, Gender>[] = [
  { key: 'female', value: 'female' },
  { key: 'male', value: 'male' },
];

type ChooseGenderProps = {
  onChange: (gender: Gender) => void;
  gender: Gender | undefined;
};
export const EditProfileGenderInput = ({ onChange, gender }: ChooseGenderProps) => {
  return (
    <Radio
      className="flex-row"
      defaulOption={gender}
      onChange={(v) => {
        if (v) onChange(v);
      }}
      selectedOption={gender}
      getRadio={(key) => GenderRadioButton(key, gender === key)}
      items={radioGenders}
    ></Radio>
  );
};

const GenderRadioButton = (gender: Gender, active: boolean) => {
  return (
    <Card
      className={cn('p-2', {
        'outline outline-1': active,
        'text-blue-400': gender === 'male' && active,
        'text-red-400': gender === 'female' && active,
      })}
    >
      {match({ gender })
        .with({ gender: 'female' }, () => <IconFemale className="text-2xl"></IconFemale>)
        .otherwise(() => (
          <IconMale className="text-2xl"></IconMale>
        ))}
    </Card>
  );
};
