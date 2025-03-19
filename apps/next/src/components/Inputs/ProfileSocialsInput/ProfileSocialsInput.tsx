import type { SocialProfilePlatform, SocialsData } from '@repo/ts-types'
import { ModalSheet } from '@repo/ui/components/common/ModalSheet'
import { omit } from 'lodash'
import { useEffect, useState } from 'react'
import { SocialProfiles } from '../../Profile/SocialProfiles'
import { socialProfilesPlaceholderData } from '../../Profile/socialProfilesData'
import { ProfileSocialsInputSheetInput } from './ProfileSocialsInputSheetInput'
import { useSuperEffect } from '@repo/ui/dist/hooks/useSuperEffect'
import { useDrawer } from '@repo/ui/components/common/Drawer'

type SocialsInputProps = {
  currentSocialsData?: SocialsData
  onChange: (value: SocialsData) => void
}

export const ProfileSocialsInput = ({ onChange, currentSocialsData = {} }: SocialsInputProps) => {
  const [currentChosenPlatform, setCurrentChosenPlatform] = useState<SocialProfilePlatform | null>(
    null
  )
  const [socialsData, setSocialsData] = useState<SocialsData>(currentSocialsData)
  const drawerControl = useDrawer()

  useSuperEffect(
    () => {
      onChange(socialsData)
      drawerControl.setOpen(false)
    },
    [socialsData],
    { mountedOnly: true }
  )

  return (
    <>
      <SocialProfiles
        onClick={(clickedPlatform) => {
          setCurrentChosenPlatform(clickedPlatform)
          drawerControl.setOpen(true)
        }}
        disableLink
        socials={{ ...socialProfilesPlaceholderData, ...socialsData }}
      ></SocialProfiles>

      <ProfileSocialsInputSheetInput
        drawerControl={drawerControl}
        socialsData={socialsData}
        currentChosenPlatform={currentChosenPlatform}
        onChange={(newPlatformData) => {
          setSocialsData((current) => {
            console.log({ currentChosenPlatform })

            if (!currentChosenPlatform) return current

            return newPlatformData
              ? //? If newPlatformData exists, merge it with the current data, otherwise omit the current platform to remove it
                { ...current, ...{ [currentChosenPlatform]: newPlatformData } }
              : omit(current, [currentChosenPlatform])
          })
        }}
      ></ProfileSocialsInputSheetInput>
    </>
  )
}
