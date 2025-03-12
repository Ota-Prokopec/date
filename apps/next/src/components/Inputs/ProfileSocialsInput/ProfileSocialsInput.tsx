import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { merge, omit } from 'lodash'
import { useEffect, useState } from 'react'
import { SocialProfiles } from '../../Profile/SocialProfiles'
import { socialProfilesPlaceholderData } from '../../Profile/socialProfilesData'
import { ProfileSocialsInputSheetInput } from './ProfileSocialsInputSheetInput'
import { useSuperEffect } from '../../../../../../packages/ui/src/hooks/useSuperEffect'

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

  useSuperEffect(
    () => {
      onChange(socialsData)
    },
    [socialsData],
    { mountedOnly: true, deepCompare: true }
  )

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
            sheet.setIsOpen(false)
            if (!currentChosenPlatform) return current
            return newPlatformData
              ? //? If newPlatformData exists, merge it with the current data, otherwise omit the current platform to remove it
                merge(current, {
                  [currentChosenPlatform]: newPlatformData,
                })
              : omit(current, currentChosenPlatform)
          })
        }}
      ></ProfileSocialsInputSheetInput>
    </>
  )
}
