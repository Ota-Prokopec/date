import type { Gender } from '@repo/ts-types'
import { Card } from '@repo/ui/components/common/Card'
import { Radio, type RadioItem } from '@repo/ui/components/Inputs/Radio'
import { cn } from '@repo/ui/lib/utils'
import { match } from 'ts-pattern'
import { IconFemale, IconMale } from '../Icons'
import { useEffect, useState } from 'react'

const radioGenders: RadioItem<Gender, Gender>[] = [
  { key: 'female', value: 'female' },
  { key: 'male', value: 'male' },
]

type ChooseGenderProps = {
  onChange: (gender: Gender) => void
  defaultGender: Gender
  radioGroupName: string
}
export const EditProfileGenderInput = ({
  onChange,
  defaultGender,
  radioGroupName,
}: ChooseGenderProps) => {
  const [gender, setGender] = useState<Gender>(defaultGender)

  useEffect(() => {
    console.log(gender, radioGroupName)
  }, [gender])

  return (
    <Radio
      radioGroupName={radioGroupName}
      className="flex-row"
      defaulOption={gender}
      onChange={(newGender) => {
        if (newGender) setGender(newGender)
      }}
      selectedOption={gender}
      getRadio={(key) => GenderRadioButton(key, gender === key)}
      items={radioGenders}
    ></Radio>
  )
}

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
  )
}
