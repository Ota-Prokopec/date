import { getReactAuth } from '@repo/better-auth/client'
import type { ParseReturnType } from 'better-auth'
import { useState } from 'react'

type T = ParseReturnType<typeof signIn.social>

export const { signIn, signOut } = getReactAuth({})

export const useSignInSocials = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<{} | undefined>(undefined)

  const signInFunction = async (...params: Parameters<typeof signIn.social>) => {
    try {
      setIsLoading(true)
      await signIn.social(...params)
    } catch (error) {
      setError(error as {})
    }
    setIsLoading(false)
  }

  return { signIn: signInFunction, isLoading, error }
}
