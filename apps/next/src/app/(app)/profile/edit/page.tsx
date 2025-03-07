'use client'

import { useGetAccountProfileSuspenseQuery } from '@/graphql/generated/apollo'
import { fullAccountDataZodSchema } from '@repo/ts-types'
import { EditProfilePageContent } from './EditProfilePageContent'

const EditProfilePage = () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const { data } = useGetAccountProfileSuspenseQuery()
  console.log(data)

  return (
    <EditProfilePageContent
      currentAccountData={fullAccountDataZodSchema.parse(data?.getAccountProfile)}
    ></EditProfilePageContent>
  )
}

export default EditProfilePage
