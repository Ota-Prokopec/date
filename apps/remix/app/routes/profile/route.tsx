'use client';

import { Button } from '@repo/ui/components/common/Button';
import { Card } from '@repo/ui/components/common/Card';
import { Center } from '@repo/ui/components/common/Center';
import { Column } from '@repo/ui/components/common/Column';
import { Text } from '@repo/ui/components/common/Text';
import { IconFemale, IconMale } from '../../components/Icons';
import { SocialProfiles } from '../../components/SocialProfiles';
import { ProfileNameAndAge } from '@/components/Profile/ProfileNameAndAge';
import { Image } from '@repo/ui/components/common/Image';

const ProfilePage = () => {
  const GenderIcon = true ? (
    <IconMale className="text-blue-500" />
  ) : (
    <IconFemale className="text-red-500" />
  );

  return (
    <Center className="w-full h-full">
      <Column className=" h-full p-4 gap-6">
        <Card className="w-[300px] h-[350px] rounded-t-xl rounded-b-none  relative">
          <Image
            alt="profile-picture"
            src={'/rapper.webp'}
            width={300}
            height={350}
            className="w-full h-full rounded-t-xl rounded-b-none"
          ></Image>

          <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 bg-white rounded-[100px] flex items-center justify-center [&_*]:w-14 [&_*]:h-14">
            {GenderIcon}
          </div>
        </Card>
        <ProfileNameAndAge name="Ota" age={20}></ProfileNameAndAge>
        <Column>
          <Text className="font-bold">Bio:</Text>
          <Text className="ml-4">I am good and only good</Text>
        </Column>
        <SocialProfiles
          socials={{ instagram: { id: '@otik_737', link: new URL('https://instagram.com') } }}
        ></SocialProfiles>
        <Button>Edit profile</Button>
      </Column>
    </Center>
  );
};

export default ProfilePage;
