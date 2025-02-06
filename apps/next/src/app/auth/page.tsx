'use client';

import { GoogleSignInButton } from '@repo/ui/components/buttons/GoogleSignInButton';
import { Column } from '@repo/ui/components/common/Column';

const AuthPage = () => {
  const signIn = () => {};

  return (
    <Column className="w-auto h-full justify-center items-center">
      <GoogleSignInButton onClick={signIn}></GoogleSignInButton>
    </Column>
  );
};

export default AuthPage;
