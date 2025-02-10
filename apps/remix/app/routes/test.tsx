import { IconCheck } from '@/components/Icons/Icons';
import { UpdateProfileDrawer } from '@/components/MyDate/UpdateProfileDrawer';
import { graphqlSdk } from '@/graphql/clients/graphqlClient';
import { useUploadFileMutation } from '@/graphql/generated/urql-graphql';
import { useForms } from '@/lib/forms';
import { Drawer } from '@repo/ui/components/common/Drawer';
import { Input } from '@repo/ui/components/Inputs/Input';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Page = () => {
  const { data, update, mutate, updateItem } = useForms<{
    id?: string;
    name: string;
    userAge?: string;
    thing: string;
  }>({ name: '', thing: 's' }, ({ id }) => {});

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Drawer title="title" triggerButton={<button>trigger</button>}>
      ahoj
    </Drawer>
  );
};

export default Page;
