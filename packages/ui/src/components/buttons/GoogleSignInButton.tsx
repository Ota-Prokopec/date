'use client';
import { Row } from '../common/Row';
import { Text } from '../common/Text';
import { IconGoogle } from '../Icons/IconGoogle';
import { cn } from '../../lib/utils';
import { Button } from '../shadcn/button';

export type GoogleSignInButtonProps = {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};
export const GoogleSignInButton = ({ className, onClick, disabled }: GoogleSignInButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={cn('!bg-blue-500/90 p-3 pl-4 pr-4 w-auto h-auto', className)}
    >
      <Row className="justify-center items-center gap-3">
        <Text className="text-xl text-white/90">Sign in with Google</Text>
        <IconGoogle className="w-10 h-10"></IconGoogle>
      </Row>
    </Button>
  );
};
