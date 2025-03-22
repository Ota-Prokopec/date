import { Row } from '@repo/ui/components/common/Row'
import { Skeleton } from '@repo/ui/components/shadcn/skeleton'

export const ProfileNameAndAgeSkeletonLoading = () => {
  return (
    <Row className="w-full gap-2 items-center">
      <div className="font-bold text-3xl text-black/70">
        <Skeleton></Skeleton>
      </div>
      <div className="font-bold text-2xl  rounded-full p-1">
        <Skeleton></Skeleton>
      </div>
    </Row>
  )
}
