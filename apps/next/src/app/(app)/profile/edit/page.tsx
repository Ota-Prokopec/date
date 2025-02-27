'use server'

import { getAccountDataAction } from '@/app/actions/getAccountDataAction'
import { fullAccountDataZodSchema } from '@repo/ts-types'
import { ProfilePageContent } from './EditProfilePageContent'

const EditProfilePage = async () => {
  //? loading - loading.tsx, error - error.tsx (works for both errors - fetch and validation)
  const accountDataForValidation = await getAccountDataAction()
  const validFullAccountData = fullAccountDataZodSchema.parse(accountDataForValidation)

  return <ProfilePageContent currentAccountData={validFullAccountData}></ProfilePageContent>
}

export default EditProfilePage
