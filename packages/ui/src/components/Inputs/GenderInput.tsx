import type { Gender } from '@repo/ts-types'
import { Card } from '@repo/ui/components/common/Card'
import { Radio, type RadioItem } from '../Inputs/Radio'
import { cn } from '../../lib/utils'
import { match } from 'ts-pattern'
import { IconFemale, IconMale } from '../../components/Icons/Icons'
import { memo } from 'react'

const radioGenders: RadioItem<Gender, Gender>[] = [
  { key: 'female', value: 'female' },
  { key: 'male', value: 'male' },
]

type GenderInputProps = {
  onChange: (gender: Gender) => void
  value: Gender
}

export const GenderInput = memo(({ onChange, value: defaultGender }: GenderInputProps) => {
  return (
    <Radio<Gender, Gender>
      className="flex-row"
      defaultOption={defaultGender}
      onChange={(selectedGender) => {
        if (onChange) onChange(selectedGender)
      }}
      getRadio={({ key, selected }) => GenderRadioButton(key, selected)}
      items={radioGenders}
    ></Radio>
  )
})

const GenderRadioButton = (gender: Gender, active: boolean) => {
  return (
    <Card
      className={cn('p-2', {
        'outline outline-10 shadow-inner ': active,
        'text-blue-400 outline-blue-400': gender === 'male' && active,
        'text-red-400 outline-red-400': gender === 'female' && active,
      })}
    >
      {match({ gender })
        .with({ gender: 'female' }, () => (
          <IconFemale strokeWidth={2.5} className="w-8 h-8"></IconFemale>
        ))
        .otherwise(() => (
          <IconMale strokeWidth={2.5} className="w-8 h-8"></IconMale>
        ))}
    </Card>
  )
}
