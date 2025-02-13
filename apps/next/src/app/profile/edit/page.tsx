'use client'

import { Button } from '@repo/ui/components/common/Button'
import { Card } from '@repo/ui/components/common/Card'
import { Center } from '@repo/ui/components/common/Center'
import { Column } from '@repo/ui/components/common/Column'
import { ImageInput } from '@repo/ui/components/common/ImageInput'
import { Text } from '@repo/ui/components/common/Text'
import { IconChange } from '../../../components/Icons'
import { envClient } from '@/lib/envClient'
import { BioInput } from '@/components/Inputs/BioInput'
import { EditProfileItem } from '@/components/Inputs/EditProfileItem'
import { GenderInput } from '@/components/Inputs/GenderInput'
import { SocialsInput } from '@/components/Inputs/ProfileSocialsInput'
import { Row } from '@repo/ui/components/common/Row'
import { ProfileNameAndAge } from '@/components/Profile/ProfileNameAndAge'

const ProfilePage = () => {
  return (
    <Center className="w-full h-full">
      <Column className="h-full p-4 gap-6 max-w-[600px] w-full items-center justify-start">
        <Card className="max-w-[300px] max-h-[350px] w-full rounded-t-xl rounded-b-none relative">
          <IconChange className="absolute top-0 right-0 w-12 h-12 m-2 fill-white outline-solid outline-2 outline-offset-2 rounded-full"></IconChange>

          <ImageInput
            sizes={{
              height: envClient.NEXT_PUBLIC_PROFILE_PICTURE_HEIGHT,
              width: envClient.NEXT_PUBLIC_PROFILE_PICTURE_WIDTH,
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
            <BioInput></BioInput>
          </EditProfileItem>
          <Row className="gap-2">
            <EditProfileItem className="w-fit mobile:w-full" title="My gender">
              <GenderInput onChange={() => {}} defaultGender="male"></GenderInput>
            </EditProfileItem>
            <EditProfileItem className="w-fit mobile:w-full" title="How to connect with me">
              <SocialsInput></SocialsInput>
            </EditProfileItem>
          </Row>
        </Column>

        <Button className="bg-blue-500 text-2xl !p-8 !pl-10 !pr-10">Save changes</Button>
      </Column>
    </Center>
  )
}

export default ProfilePage
