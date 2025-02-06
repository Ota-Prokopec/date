'use client';

import { useRef, useState, type ChangeEvent, type ReactNode } from 'react';
import { Image, type ReactImageProps } from './Image';
import { MdChangeCircle as IconChange } from 'react-icons/md';
import { IoIosAddCircle as IconAdd } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { fileTostring, readHTMLImageInput } from '@repo/utils/common/images';
import { ImageCropper } from './ImageCropper';
import { ModalSheet } from './ModalSheet';

type ImageInputProps = {
  initialSrc?: string | null | undefined;
  fallbackSrc: string;
  className?: string;
  imageFileAcceptPattern?: string;
  onError?: () => void;
} & Omit<ReactImageProps, 'src' | 'fallbackSrc'>;

export const ImageInput = ({
  initialSrc,
  fallbackSrc,
  className,
  onError,
  imageFileAcceptPattern,
  ...props
}: ImageInputProps) => {
  const [src, setSrc] = useState<string | null | undefined>(initialSrc);
  const inputRef = useRef<HTMLInputElement>(null);
  const croppingModal = new ModalSheet({ detent: 'full-height', initiallyOpen: true });

  const fileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const payload = await readHTMLImageInput(event);
    const base64 = await fileTostring(payload);

    setSrc(base64);
  };

  return (
    <>
      <input
        ref={inputRef}
        onChange={fileChange}
        type="file"
        className="hidden"
        accept={imageFileAcceptPattern}
      />
      <div className={cn('relative', className)}>
        <button
          onClick={() => {
            if (!inputRef.current) {
              if (onError) onError();
              throw new Error('file input reference is not defined');
            }
            inputRef.current.click();
          }}
          className="absolute top-0 right-0 [&>*]:w-12 [&>*]:h-12 m-2 fill-white cursor-pointer"
        >
          {src ? <IconChange className=""></IconChange> : <IconAdd className=""></IconAdd>}
        </button>
        <Image
          fallbackSrc={fallbackSrc}
          src={src ?? ''}
          {...props}
          className="w-full h-full rounded-t-xl rounded-b-none bg-gray-500 object-cover"
        ></Image>
      </div>
      <croppingModal.Sheet>j </croppingModal.Sheet>
    </>
  );
};
