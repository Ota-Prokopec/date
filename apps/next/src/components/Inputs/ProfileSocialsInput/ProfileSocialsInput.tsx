import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { merge } from 'lodash'
import { useEffect, useState } from 'react'
import { SocialProfiles } from '../../Profile/SocialProfiles'
import { socialProfilesPlaceholderData } from '../../Profile/socialProfilesData'
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
            console.log('change', currentChosenPlatform)

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
