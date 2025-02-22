'use client'

import { fileTostring, readHTMLImageInput } from '@repo/utils/common/images'
import { useRef, useState, type ChangeEvent } from 'react'
import { IoIosAddCircle as IconAdd } from 'react-icons/io'
import { MdChangeCircle as IconChange } from 'react-icons/md'
import { cn } from '../../lib/utils'
import { Image, type ReactImageProps } from './Image'

type ImageInputProps = {
  src?: string | null | undefined
  fallbackSrc: string
  className?: string
  imageFileAcceptPattern?: string
  sizes: {
    height: number
    width: number
  }
  onError?: () => void
  onChange: (imageFile: File) => void
} & Omit<ReactImageProps, 'src' | 'fallbackSrc' | 'sizes' | 'onChange'>

export const ImageInput = ({
  src: initialSrc,
  fallbackSrc,
  className,
  onError,
  sizes,
  imageFileAcceptPattern,
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
        accept={imageFileAcceptPattern}
      />
      <div className={cn('relative', className)}>
        <button
          onClick={() => {
            if (!inputRef.current) {
              if (onError) onError()
              throw new Error('file input reference is not defined')
            }
            inputRef.current.click()
          }}
          className="absolute top-0 right-0 [&>*]:w-12 [&>*]:h-12 m-2 bg-white rounded-full cursor-pointer"
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
    </>
  )
}
