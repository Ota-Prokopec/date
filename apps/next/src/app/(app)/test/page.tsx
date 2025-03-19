'use client'

import {
  GetAccountProfileDocument,
  useGetAccountProfileQuery,
  useTestQuerySuspenseQuery,
  useUpdateAccountMutation,
} from '@/graphql/generated/apollo'
import { Column } from '@repo/ui/components/common/Column'
import { merge, omit } from 'lodash'
import { useEffect, useState } from 'react'
import { Textarea } from '@repo/ui/components/common/Textarea'

const Page = () => {
  const { data } = useGetAccountProfileQuery({})
  const [value, setValue] = useState<string>('')

  const [updateUserAccount] = useUpdateAccountMutation()

  useEffect(() => {
    console.log(data?.getAccountProfile)
  }, [data])

  const onSubmit = async () => {
    await updateUserAccount({
      variables: { userProfileData: { bio: value } },
      refetchQueries: [GetAccountProfileDocument],
    })
  }

  return (
    <Column className="justify-center items-center">
      <Textarea onValueChange={setValue}></Textarea>
      <button onClick={onSubmit}></button>

      <div></div>
    </Column>
  )
}

export default Page
