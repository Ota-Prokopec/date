import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { IconInstagram, IconLink, IconUser } from '@repo/ui/components/Icons/Icons'
import { Input } from '@repo/ui/components/Inputs/Input'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { match } from 'ts-pattern'
import { socialProfilesMetaData } from '../../Profile/socialProfilesData'

type SheetInputProps = {
  sheet: ModalSheet
  socialsData: SocialsData | undefined
  currentChosenPlatform: SocialProfilePlatform | null
  onChange: (newPlatformData: SocialsData[keyof SocialsData] | undefined) => void
}

export const ProfileSocialsInputSheetInput = ({
  sheet,
  currentChosenPlatform,
  socialsData,
  onChange,
}: SheetInputProps) => {
  const t = useTranslations('components.ProfileSocialsInputSheetInput')

  const [profileIdValue, setProfileIdValue] = useState<string>(
    currentChosenPlatform && socialsData && socialsData[currentChosenPlatform]
      ? socialsData[currentChosenPlatform]?.profileId
      : ''
  )

  const [linkValue, setLinkValue] = useState<string>(
    currentChosenPlatform && socialsData && socialsData[currentChosenPlatform]
      ? socialsData[currentChosenPlatform]?.link
      : ''
  )

  const submit = () => {
    if (currentChosenPlatform) {
      //? if ProfileIdValue is blank or the link is blank then the value passed to onChange(undefined) will be undefined => that means that it will be removed from the FORM HOOK => it will be removed from database
      const newValue =
        linkValue.length && profileIdValue.length
          ? {
              profileId: profileIdValue,
              link: linkValue,
            }
          : undefined

      onChange(newValue)
    }
  }

  return (
    <sheet.Sheet className="h-full w-full">
      <Center className="p-4 w-full">
        <Column className="max-w-[600px] gap-2 w-full">
          <Row className="items-center justify-center gap-2">
            {match(currentChosenPlatform)
              .with('instagram', () => <IconInstagram className="w-12 h-12"></IconInstagram>)
              .otherwise(() => 'Something went wrong')}
            <Text className="font-bold text-xl">
              {currentChosenPlatform ? socialProfilesMetaData[currentChosenPlatform].title : null}
            </Text>
          </Row>
          <Input
            className=""
            style={{ border: '0 !important' }}
            startContent={<IconUser></IconUser>}
            type="text"
            value={profileIdValue}
            placeholder="profileID (make translation)"
            onValueChange={setProfileIdValue}
          />
          <Input
            className=""
            style={{ border: '0 !important' }}
            startContent={<IconLink></IconLink>}
            type="text"
            value={linkValue}
            placeholder="URL"
            onValueChange={setLinkValue}
          />
          <Button disabled={!currentChosenPlatform} onClick={submit}>
            {t('submitButtonLabel')}
          </Button>
        </Column>
      </Center>
    </sheet.Sheet>
  )
}
