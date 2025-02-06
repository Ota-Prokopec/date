import { Input } from '@heroui/react';
import { FaSearch } from 'react-icons/fa';

type SearchInputProps = {
  label?: string;
};

export const SearchInput = ({ label = 'vyhledat' }: SearchInputProps) => {
  return (
    <Input
      type="text"
      placeholder={label}
      labelPlacement="outside-left"
      endContent={
        <FaSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};
