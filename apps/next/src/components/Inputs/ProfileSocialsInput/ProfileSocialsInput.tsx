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
import { SocialProfiles } from '../../Profile/SocialProfiles'
import {
  socialProfilesMetaData,
  socialProfilesPlaceholderData,
} from '../../Profile/socialProfilesData'
import { ProfileSocialsInputSheetInput } from './ProfileSocialsInputSheetInput'

type SocialsInputProps = {
  currentSocialsData?: SocialsData

  // - undefined for if the user decides to delete it
  onChange: (value: SocialsData | undefined) => void
}

export const ProfileSocialsInput = ({ onChange, currentSocialsData = {} }: SocialsInputProps) => {
  const sheet = new ModalSheet({ initiallyOpen: false, detent: 'full-height' })
  const [currentChosenPlatform, setCurrentChosenPlatform] = useState<SocialProfilePlatform | null>(
    null
  )
  const [socialsData, setSocialsData] = useState<SocialsData>(currentSocialsData)

  useEffect(() => {
    onChange(socialsData)
  }, [socialsData])

  return (
    <>
      <SocialProfiles
        onClick={(clickedPlatform) => {
          setCurrentChosenPlatform(clickedPlatform)
          sheet.setIsOpen(true)
        }}
        disableLink
        socials={Object.keys(socialsData).length ? socialsData : socialProfilesPlaceholderData}
      ></SocialProfiles>

      <ProfileSocialsInputSheetInput
        sheet={sheet}
        socialsData={socialsData}
        currentChosenPlatform={currentChosenPlatform}
        onChange={(newPlatformData) => {
          setSocialsData((current) => {
            if (!currentChosenPlatform) return current
            return merge(current, {
              [currentChosenPlatform]: newPlatformData,
            })
          })
        }}
      ></ProfileSocialsInputSheetInput>
    </>
  )
}
