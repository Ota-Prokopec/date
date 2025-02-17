import { Row } from '@repo/ui/components/common/Row'
import { Text } from '@repo/ui/components/common/Text'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'

type ProfileNameAndAgeProps = {
  name: string
  age: number
}
export const ProfileNameAndAge = ({ name, age }: ProfileNameAndAgeProps) => {
  return (
    <Row className="w-full gap-2 items-center">
      <Text className="font-bold text-3xl text-black/70">{name}</Text>
      <Text className="font-bold text-2xl  rounded-full p-1"> {age} </Text>
    </Row>
  )
}

export const ProfileNameAndAgeSkeletonLoading = () => {
  return (
    <Row className="w-full gap-2 items-center">
      <Text className="font-bold text-3xl text-black/70">
        <Skeleton></Skeleton>
      </Text>
      <Text className="font-bold text-2xl  rounded-full p-1">
        <Skeleton></Skeleton>
      </Text>
    </Row>
  )
}
