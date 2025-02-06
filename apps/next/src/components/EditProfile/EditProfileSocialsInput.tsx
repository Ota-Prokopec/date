import { Input, Textarea } from '@heroui/react';
import { EditProfileItem } from './EditProfileItem';
import { SocialProfiles } from '../SocialProfiles';
import { ModalSheet } from '@repo/ui/components/common/ModalSheet';
import type { SocialPlatform } from '@repo/ts-types';
import { useState } from 'react';
import { match } from 'ts-pattern';
import { IconInstagram, IconLink, IconUser } from '../Icons';
import { Column } from '@repo/ui/components/common/Column';
import { Text } from '@repo/ui/components/common/Text';
import { Row } from '@repo/ui/components/common/Row';
import { Center } from '@repo/ui/components/common/Center';

type EditProfileBioInputProps = {};

export const EditProfileSocialsInput = ({}: EditProfileBioInputProps) => {
  const sheet = new ModalSheet({ initiallyOpen: false, detent: 'full-height' });
  const [platform, setPlatform] = useState<SocialPlatform | null>(null);

  return (
    <>
      <SocialProfiles
        onClick={(clickedPlatform) => {
          setPlatform(clickedPlatform);
          sheet.setIsOpen(true);
        }}
        disableLink
        socials={{ instagram: { id: 'fda', link: new URL('https://j.com') } }}
      ></SocialProfiles>

      <sheet.Sheet className="h-full w-full">
        <Center className="p-4 w-full">
          <Column className="max-w-[600px] gap-2 w-full">
            <Row className="items-center justify-center gap-2">
              {match(platform)
                .with('instagram', () => <IconInstagram className="w-12 h-12"></IconInstagram>)
                .otherwise(() => 'Something went wrong')}
              <Text className="font-bold text-xl">{platform}</Text>
            </Row>
            <Input
              className="outline-none !border-0"
              style={{ border: '0 !important' }}
              startContent={<IconUser></IconUser>}
              type="text"
              placeholder="ID"
            />
            <Input
              className="outline-none !border-0"
              style={{ border: '0 !important' }}
              startContent={<IconLink></IconLink>}
              type="text"
              placeholder="URL"
            />
          </Column>
        </Center>
      </sheet.Sheet>
    </>
  );
};
