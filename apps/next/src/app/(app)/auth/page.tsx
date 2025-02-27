'use client';

import { signIn, useSignInSocials } from '@/lib/auth/authClient';
import { GoogleSignInButton } from '@repo/ui/components/buttons/GoogleSignInButton';
import { Column } from '@repo/ui/components/common/Column';
import { useEffect } from 'react';
import { toast } from 'sonner';

const AuthPage = () => {
  const { signIn, error, isLoading } = useSignInSocials();

  useEffect(() => {
    if (error)
      toast.error('Something went wrong', { dismissible: true, style: { margin: '10px' } });
  }, [error]);

  const signInWithGoogle = async () => {
    await signIn({ provider: 'google', callbackURL: '/', newUserCallbackURL: '/auth/newuser' });
  };

  return (
    <Column className="w-auto h-full justify-center items-center">
      <GoogleSignInButton onClick={signInWithGoogle}></GoogleSignInButton>
    </Column>
  );
};

export default AuthPage;
