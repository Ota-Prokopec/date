import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { IconFacebook, IconInstagram, IconLink, IconUser } from '@repo/ui/components/Icons/Icons'
import { Input } from '@repo/ui/components/Inputs/Input'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { Drawer, DrawerControl } from '@repo/ui/components/common/Drawer'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'
import { match } from 'ts-pattern'
import { socialProfilesMetaData } from '../../Profile/SocialProfiles/socialProfilesData'

type SheetInputProps = {
  socialsData: SocialsData
  currentChosenPlatform: SocialProfilePlatform | null
  onChange: (newPlatformData: SocialsData[keyof SocialsData] | undefined) => void
  drawerControl: DrawerControl
}

export const ProfileSocialsInputSheetInput = ({
  currentChosenPlatform,
  socialsData,
  onChange,
  drawerControl,
}: SheetInputProps) => {
  const t = useTranslations('components.ProfileSocialsInputSheetInput')

  const linkValue = currentChosenPlatform ? socialsData[currentChosenPlatform]?.link : ''
  const profileIdValue = currentChosenPlatform ? socialsData[currentChosenPlatform]?.profileId : ''
  const profileIdInputElement = useRef<HTMLInputElement | null>(null)
  const linkInputElement = useRef<HTMLInputElement | null>(null)

  const submit = () => {
    if (currentChosenPlatform) {
      const profileIdInputValue = profileIdInputElement.current?.value
      const linkInputValue = linkInputElement.current?.value
      //? if ProfileIdValue is blank or the link is blank then the value passed to onChange(undefined) will be undefined => that means that it will be removed from the FORM HOOK => it will be removed from database
      const newValue =
        linkInputValue?.length && profileIdInputValue?.length
          ? {
              profileId: profileIdInputValue,
              link: linkInputValue,
            }
          : undefined

      onChange(newValue)
    }
  }

  return (
    <Drawer control={drawerControl} backdrop="opaque" placement="bottom" className="h-full w-full">
      <Center className="p-4 w-full">
        <Column className="max-w-[600px] gap-2 w-full">
          <Row className="items-center justify-center gap-2">
            {match(currentChosenPlatform)
              .with('instagram', () => <IconInstagram className="w-12 h-12"></IconInstagram>)
              .otherwise(() => (
                <IconFacebook className="w-12 h-12 fill-blue-500"></IconFacebook>
              ))}
            <Text className="font-bold text-xl">
              {currentChosenPlatform ? socialProfilesMetaData[currentChosenPlatform].title : null}
            </Text>
          </Row>
          <Input
            ref={profileIdInputElement}
            className=""
            style={{ border: '0 !important' }}
            startContent={<IconUser></IconUser>}
            type="text"
            defaultValue={profileIdValue}
            placeholder="profileID (make translation)"
          />
          <Input
            ref={linkInputElement}
            className=""
            style={{ border: '0 !important' }}
            startContent={<IconLink></IconLink>}
            type="text"
            defaultValue={linkValue}
            placeholder="URL"
          />
          <Button disabled={!currentChosenPlatform} onClick={submit}>
            {t('submitButtonLabel')}
          </Button>
        </Column>
      </Center>
    </Drawer>
  )
}
