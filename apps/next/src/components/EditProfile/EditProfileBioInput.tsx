import { Textarea } from '@heroui/react';
import { EditProfileItem } from './EditProfileItem';

type EditProfileBioInputProps = {};

export const EditProfileBioInput = ({}: EditProfileBioInputProps) => {
  return <Textarea className=" outline-none !border-0 w-full" style={{ border: '0 !important' }} />;
};
