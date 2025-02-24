import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { IconInstagram, IconLink, IconUser } from '@repo/ui/components/Icons/Icons'
import { Input } from '@repo/ui/components/Inputs/Input'
import { Button } from '@repo/ui/components/common/Button'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { merge } from 'lodash'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { match } from 'ts-pattern'
import { SocialProfiles } from '../Profile/SocialProfiles'
import {
  socialProfilesMetaData,
  socialProfilesPlaceholderData,
} from '../Profile/socialProfilesData'

type SocialsInputProps = {
  currentSocialsData?: SocialsData

  // - undefined for if the user decides to delete it
  onChange: (value: SocialsData | undefined) => void
}

export const ProfileSocialsInput = ({ currentSocialsData, onChange }: SocialsInputProps) => {
  const sheet = new ModalSheet({ initiallyOpen: false, detent: 'full-height' })
  const [currentChosenPlatform, setCurrentChosenPlatform] = useState<SocialProfilePlatform | null>(
    null
  )
  const [socialsData, setSocialsData] = useState<SocialsData | undefined>(currentSocialsData)

  useEffect(() => {
    onChange(socialsData)
  }, [])

  return (
    <>
      <SocialProfiles
        onClick={(clickedPlatform) => {
          setCurrentChosenPlatform(clickedPlatform)
          sheet.setIsOpen(true)
        }}
        disableLink
        socials={socialsData || socialProfilesPlaceholderData}
      ></SocialProfiles>

      <SheetInput
        sheet={sheet}
        socialsData={socialsData}
        currentChosenPlatform={currentChosenPlatform}
        setSocialsData={setSocialsData}
      ></SheetInput>
    </>
  )
}

type SheetInputProps = {
  sheet: ModalSheet
  socialsData: SocialsData | undefined
  currentChosenPlatform: SocialProfilePlatform | null
  setSocialsData: Dispatch<SetStateAction<SocialsData | undefined>>
}

const SheetInput = ({
  sheet,
  currentChosenPlatform,
  socialsData,
  setSocialsData,
}: SheetInputProps) => {
  const [currentProfileIdValue, setCurrentProfileIdValue] = useState<string>(
    currentChosenPlatform && socialsData && socialsData[currentChosenPlatform]
      ? socialsData[currentChosenPlatform]?.profileId
      : ''
  )

  const [currentLinkValue, setCurrentLinkValue] = useState<string>(
    currentChosenPlatform && socialsData && socialsData[currentChosenPlatform]
      ? socialsData[currentChosenPlatform]?.profileId
      : ''
  )

  return (
    <sheet.Sheet className="h-full w-full">
      <Center className="p-4 w-full">
        <Column className="max-w-[600px] gap-2 w-full">
          <Row className="items-center justify-center gap-2">
            {match(currentChosenPlatform)
              .with('instagram', () => <IconInstagram className="w-12 h-12"></IconInstagram>)
              .otherwise(() => 'Something went wrong')}
            <Text className="font-bold text-xl">
              {currentChosenPlatform ? socialProfilesMetaData[currentChosenPlatform].icon : null}
            </Text>
          </Row>
          <Input
            className="outline-none !border-0"
            style={{ border: '0 !important' }}
            startContent={<IconUser></IconUser>}
            type="text"
            placeholder="profileID (make translation)"
            onValueChange={setCurrentProfileIdValue}
          />
          <Input
            className="outline-none !border-0"
            style={{ border: '0 !important' }}
            startContent={<IconLink></IconLink>}
            type="text"
            placeholder="URL"
            onValueChange={setCurrentLinkValue}
          />
          <Button
            onClick={() => {
              setSocialsData((c) => {
                if (!c) return undefined
                if (!currentChosenPlatform)
                  throw new Error(
                    'currentChosenPlatform is null => it could not be chosen => something went wrong'
                  )
                return merge<SocialsData, SocialsData>(c, {
                  [currentChosenPlatform]: {
                    link: currentLinkValue,
                    profileId: currentProfileIdValue,
                  },
                })
              })
              sheet.setIsOpen(false)
            }}
          >
            write translation (save)
          </Button>
        </Column>
      </Center>
    </sheet.Sheet>
  )
}
