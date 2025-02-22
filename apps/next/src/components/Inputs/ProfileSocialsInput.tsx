import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { useState } from 'react'
import { match } from 'ts-pattern'
import { IconInstagram, IconLink, IconUser } from '@repo/ui/components/Icons/Icons'
import { SocialProfiles } from '../Profile/SocialProfiles'
import { Input } from '@repo/ui/components/Inputs/Input'
import { Button } from '@repo/ui/components/common/Button'
import {
  socialProfilesMetaData,
  socialProfilesPlaceholderData,
} from '../Profile/socialProfilesData'

type SocialsInputProps = {
  value?: SocialsData
  onChange: (value: SocialsData) => void
}

export const SocialsInput = ({ value, onChange }: SocialsInputProps) => {
  const sheet = new ModalSheet({ initiallyOpen: false, detent: 'full-height' })
  const [currentPlatform, setCurrentPlatform] = useState<SocialProfilePlatform | null>(null)
  const [socialsData, setSocialsData] = useState<SocialsData | undefined>(value)

  return (
    <>
      <SocialProfiles
        onClick={(clickedPlatform) => {
          setCurrentPlatform(clickedPlatform)
          sheet.setIsOpen(true)
        }}
        disableLink
        socials={socialsData || socialProfilesPlaceholderData}
      ></SocialProfiles>

      <sheet.Sheet className="h-full w-full">
        <Center className="p-4 w-full">
          <Column className="max-w-[600px] gap-2 w-full">
            <Row className="items-center justify-center gap-2">
              {match(currentPlatform)
                .with('instagram', () => <IconInstagram className="w-12 h-12"></IconInstagram>)
                .otherwise(() => 'Something went wrong')}
              <Text className="font-bold text-xl">
                {currentPlatform ? socialProfilesMetaData[currentPlatform].icon : null}
              </Text>
            </Row>
            <Input
              className="outline-none !border-0"
              style={{ border: '0 !important' }}
              startContent={<IconUser></IconUser>}
              type="text"
              placeholder="ID"
              onValueChange={(value) => onChange()}
            />
            <Input
              className="outline-none !border-0"
              style={{ border: '0 !important' }}
              startContent={<IconLink></IconLink>}
              type="text"
              placeholder="URL"
            />
            <Button onClick={() => sheet.setIsOpen(false)}>write translation (save)</Button>
          </Column>
        </Center>
      </sheet.Sheet>
    </>
  )
}
