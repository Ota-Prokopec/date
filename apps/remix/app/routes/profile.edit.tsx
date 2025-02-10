'use client';

import { Button } from '@repo/ui/components/common/Button';
import { Card } from '@repo/ui/components/common/Card';
import { Center } from '@repo/ui/components/common/Center';
import { Column } from '@repo/ui/components/common/Column';
import { ImageInput } from '@repo/ui/components/common/ImageInput';
import { Text } from '@repo/ui/components/common/Text';
import { env } from '@/lib/env';
import { EditProfileBioInput } from '@/components/EditProfile/EditProfileBioInput';
import { EditProfileItem } from '@/components/EditProfile/EditProfileItem';
import { EditProfileGenderInput } from '@/components/EditProfile/EditProfileGenderInput';
import { EditProfileSocialsInput } from '@/components/EditProfile/EditProfileSocialsInput';
import { Row } from '@repo/ui/components/common/Row';
import { ProfileNameAndAge } from '@/components/Profile/ProfileNameAndAge';
import { IconChange } from '@/components/Icons';

const EditProfilePage = () => {
  return (
    <Center className="w-full h-full">
      <Column className="h-full p-4 gap-6 max-w-[600px] w-full items-center justify-start">
        <Card className="max-w-[300px] max-h-[350px] w-full rounded-t-xl rounded-b-none relative">
          <IconChange className="absolute top-0 right-0 w-12 h-12 m-2 fill-white outline-solid outline-2 outline-offset-2 rounded-full"></IconChange>

          <ImageInput
            sizes={{
              height: env.NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT,
              width: env.NEXT_PUBLIC_PROFILE_PICTURE_WIDTH,
            }}
            alt="profile-picture"
            initialSrc={null}
            imageFileAcceptPattern=".jpg, .png, .jpeg"
            fallbackSrc="/userPicturePlaceholder.webp"
            className="w-full h-full "
          ></ImageInput>
        </Card>
        <ProfileNameAndAge name="Ota" age={20}></ProfileNameAndAge>

        <Column className="w-full gap-2">
          <EditProfileItem title="About me:">
            <EditProfileBioInput></EditProfileBioInput>
          </EditProfileItem>
          <Row className="gap-2">
            <EditProfileItem className="w-fit mobile:w-full" title="My gender">
              <EditProfileGenderInput onChange={() => {}} gender="male"></EditProfileGenderInput>
            </EditProfileItem>
            <EditProfileItem className="w-fit mobile:w-full" title="How to connect with me">
              <EditProfileSocialsInput></EditProfileSocialsInput>
            </EditProfileItem>
          </Row>
        </Column>

        <Button className="bg-blue-500 text-2xl !p-8 !pl-10 !pr-10">Save changes</Button>
      </Column>
    </Center>
  );
};

export default EditProfilePage;
