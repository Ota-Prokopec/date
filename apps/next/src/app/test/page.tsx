'use client'

import { accountZodSchema, genderZodSchema, type Account } from '@repo/ts-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

const formDataZodSchema = accountZodSchema.pick({
  username: true,
  gender: true,
  lookingForGender: true,
  birthDate: true,
})

type FormData = z.TypeOf<typeof formDataZodSchema>

export default () => {
  return <>"ahoj"</>
}
