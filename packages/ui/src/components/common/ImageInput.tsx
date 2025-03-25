'use client'

import { fileTostring, readHTMLImageInput } from '@repo/utils/common/images'
import { useRef, useState, type ChangeEvent } from 'react'
import { cn } from '../../lib/utils'
import { Image } from '@heroui/react'
import type { ReactImageProps } from './Image'

export type ImageFileType = ('jpg' | 'png' | 'jpeg')[]

type ImageInputProps = {
  src?: string | null | undefined
  fallbackSrc: string
  className?: string
  imageFileType?: ImageFileType
  onError?: () => void
  onChange: (imageFile: File) => void
} & Omit<ReactImageProps, 'src' | 'fallbackSrc' | 'sizes' | 'onChange'>

export const ImageInput = ({
  src: initialSrc,
  fallbackSrc,
  className,
  onError,
  imageFileType,
  onChange,
  ...props
}: ImageInputProps) => {
  const [src, setSrc] = useState<string | null | undefined>(initialSrc)

  const inputRef = useRef<HTMLInputElement>(null)
  //const cropper = new ImageCropper(src ?? '', 'image/png', sizes.height, sizes.width);
  //  const croppingModal = new ModalSheet({ detent: 'full-height', initiallyOpen: true });

  const fileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const payload = await readHTMLImageInput(event)
    const base64 = await fileTostring(payload)
    setSrc(base64)
    onChange(payload)
  }

  return (
    <>
      <input
        ref={inputRef}
        onChange={fileChange}
        type="file"
        className="hidden"
        accept={imageFileType?.map((fileType) => `.${fileType}`).join(', ')}
      />
      <div className={cn('relative h-full w-full', className)}>
        <button
          onClick={() => {
            if (!inputRef.current) {
              if (onError) onError()
              throw new Error('file input reference is not defined')
            }
            inputRef.current.click()
          }}
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
        ></button>
        <img
          src={src ?? fallbackSrc}
          {...props}
          className="!w-full !h-full rounded-xl object-cover !max-w-none"
        ></img>
      </div>
    </>
  )
}
