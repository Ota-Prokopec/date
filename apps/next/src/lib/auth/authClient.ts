import { getReactAuth } from '@repo/better-auth/client'
import { useState } from 'react'

export const { signIn, signOut } = getReactAuth({})

export const useSignInSocials = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(undefined)

  const signInFunction = async (...params: Parameters<typeof signIn.social>) => {
    try {
      setIsLoading(true)
      await signIn.social(...params)
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  return { signIn: signInFunction, isLoading, error }
}
