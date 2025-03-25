'use client'

import { AppIcon } from '@/components/common/AppIcon'
import { useLoadingPage } from '@/components/Loadable/LoadingPage/LoadingPageProvider'
import { useSignInSocials } from '@/lib/auth/authClient'
import { GoogleSignInButton } from '@repo/ui/components/buttons/GoogleSignInButton'
import { Column } from '@repo/ui/components/common/Column'
import { Text } from '@repo/ui/components/common/Text'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { AuthPageText } from './AuthPageText'

const AuthPage = () => {
  const { signIn, error, isLoading } = useSignInSocials()
  const { setLoading } = useLoadingPage()

  useEffect(() => setLoading(isLoading), [isLoading])

  useEffect(() => {
    if (error) toast.error('Something went wrong', { dismissible: true, style: { margin: '10px' } })
  }, [error])

  const signInWithGoogle = async () => {
    await signIn({ provider: 'google', callbackURL: '/', newUserCallbackURL: '/auth/newuser' })
  }

  return (
    <Column className="h-full items-center justify-between">
      <AppIcon className="w-[500px] max-w-full" />
      <Column className="gap-10 max-w-[500px] w-full">
        <AuthPageText />
        <GoogleSignInButton onClick={signInWithGoogle}></GoogleSignInButton>
      </Column>
    </Column>
  )
}

export default AuthPage
