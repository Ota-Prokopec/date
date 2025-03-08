'use client'

import { fullAccountDataZodSchema } from '@repo/ts-types'
import { EditProfilePageContent } from './EditProfilePageContent'
import { useGetAccountProfileQuery } from '@/graphql/generated/urql'

const EditProfilePage = () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const [{ data }] = useGetAccountProfileQuery()
  console.log(data)

  return (
    <EditProfilePageContent
      currentAccountData={fullAccountDataZodSchema.parse(data?.getAccountProfile)}
    ></EditProfilePageContent>
  )
}

export default EditProfilePage
