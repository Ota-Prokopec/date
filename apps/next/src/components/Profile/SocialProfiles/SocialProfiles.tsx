import type { SocialProfileDataParams, SocialProfilePlatform } from '@repo/ts-types'
import { Column } from '@repo/ui/components/common/Column'
import { SocialProfileItem } from './SocialProfilesItem'
import { socialProfilesMetaData, type SocialsDataToSocialsProfiles } from './socialProfilesData'

export type SocialProfilesProps = {
  socials: Partial<SocialsDataToSocialsProfiles>
  disableLink?: boolean
  loading?: boolean
  onClick?: (platform: SocialProfilePlatform) => void
}

export const SocialProfiles = ({ socials, onClick, disableLink = false }: SocialProfilesProps) => {
  return (
    <Column className="gap-2">
      {(Object.entries(socials ?? []) as [[SocialProfilePlatform, SocialProfileDataParams]]).map(
        ([platform, params], i) => (
          <SocialProfileItem
            key={i}
            onClick={() => {
              if (onClick) onClick(platform)
            }}
            disableLink={disableLink}
            {...params}
            icon={socialProfilesMetaData[platform].icon}
          ></SocialProfileItem>
        )
      )}
    </Column>
  )
}
