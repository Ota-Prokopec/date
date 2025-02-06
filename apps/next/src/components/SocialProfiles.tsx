'use client';

import { Card } from '@repo/ui/components/common/Card';
import { Column } from '@repo/ui/components/common/Column';
import { Row } from '@repo/ui/components/common/Row';
import { Text } from '@repo/ui/components/common/Text';
import { type ReactNode } from 'react';
import { IconInstagram, IconLink } from './Icons';
import Link from 'next/link';
import type { SocialPlatform } from '@repo/ts-types';

type Profile = { id: string; link: URL };

export type SocialProfilesProps = {
  socials: { instagram: Profile };
  disableLink?: boolean;
  onClick?: (platform: SocialPlatform) => void;
};

export const SocialProfiles = ({ socials, onClick, disableLink = false }: SocialProfilesProps) => {
  const icon = <IconInstagram className="w-10 h-10"></IconInstagram>;

  return (
    <Column>
      {(Object.entries(socials) as [[SocialPlatform, Profile]]).map(([platform, params], i) => (
        <Profile
          key={i}
          onClick={() => {
            if (onClick) onClick(platform);
          }}
          disableLink={disableLink}
          {...params}
          icon={icon}
        ></Profile>
      ))}
    </Column>
  );
};

const Profile = ({
  id,
  link,
  icon,
  disableLink,
  onClick,
}: Profile & { icon: ReactNode; disableLink: boolean; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="border-none shadow-none items-start [&>*]:justify-start">
      <Row className="gap-2 justify-center items-center">
        {icon}
        <Text className="font-bold text-black/75 text-lg">{id}</Text>
        {!disableLink && (
          <Link href={link}>
            <IconLink></IconLink>
          </Link>
        )}
      </Row>
    </button>
  );
};
