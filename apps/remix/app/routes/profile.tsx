import { UpdateProfileDrawer } from '@/components/MyDate/UpdateProfileDrawer';
import { MyDateCard } from '@/components/MyDate/MyDateCard';
import { NavBarLayout } from '@/components/NavBar/NavBarLayout';
import type { UserProfileData } from '@repo/ts-types';
import { Center } from '@repo/ui/components/common/Center';
import { Column } from '@repo/ui/components/common/Column';
import { Right } from '@repo/ui/components/common/Right';
import { Text } from '@repo/ui/components/common/Text';
import { useGetUserProfileQuery } from '@/graphql/generated/apollo-graphql';
import { Suspense } from 'react';
import { match } from 'ts-pattern';
import { Loading } from '@repo/ui/components/common/Loading';

const ProfilePage = () => {
  const { data, loading, error } = useGetUserProfileQuery();
  const userProfile = data?.getUserProfile;

  return match({ data, loading, error })
    .with({ loading: true, data: undefined, error: undefined }, () => <Loading></Loading>)
    .otherwise(() => {
      return (
        <Center className="w-full h-full">
          <MyDateCard
            className="mobile:border-none mobile:shadow-none"
            data={{
              personAge: userProfile!.userAge,
              personGender: userProfile!.userGender,
              personName: userProfile!.userName,
              pictureUrl: userProfile!.userPictureUrl,
            }}
          >
            <Text className="font-semibold">{fetchedData.userBio}</Text>
            <Right>
              <UpdateProfileDrawer profileData={fetchedData}></UpdateProfileDrawer>
            </Right>
          </MyDateCard>
        </Center>
      );
    });
};

const Page = () => {
  return (
    <NavBarLayout>
      <ProfilePage></ProfilePage>
    </NavBarLayout>
  );
};
export default Page;
