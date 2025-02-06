import { cn } from '@/lib/utils';
import { base64ToFile, readHTMLImageInput } from '@repo/utils/common/images';
import { FileInput, Label } from 'flowbite-react';
import { useId, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { match } from 'ts-pattern';
import { Text } from './Text';

export type ImageCropperProps = {
  src: string;
  className?: string;
};

export class ImageCropper {
  public editor: RefObject<AvatarEditor | undefined>;
  public src: string | File | undefined;
  public setSrc: Dispatch<SetStateAction<string | File | undefined>>;
  public pictureHeight: number;
  public pictureWidth: number;

  constructor(
    private initialPictureSrc: File | string | undefined,
    private imageType: 'image/jpeg' | 'image/png' = 'image/jpeg',
    pictureHeight: number,
    pictureWidth: number
  ) {
    this.editor = useRef<AvatarEditor | undefined>(undefined);
    const [src, setSrc] = useState<File | string | undefined>(initialPictureSrc);
    this.src = src;
    this.setSrc = setSrc;
    this.setEditorRef = this.setEditorRef.bind(this);
    this.crop = this.crop.bind(this);
    this.render = this.render.bind(this);
    this.pictureHeight = pictureHeight;
    this.pictureWidth = pictureWidth;
  }

  crop = () => {
    if (!this.editor.current) throw new Error('Editor not initialized');

    const canvasScaled = this.editor.current.getImageScaledToCanvas();
    return base64ToFile(canvasScaled.toDataURL(this.imageType), 'image.jpeg');
  };

  private setEditorRef = (editor: AvatarEditor | undefined) => (this.editor.current = editor);

  render({
    className,
    dropzoneLabel,
    disable = false,
  }: {
    className?: string;
    dropzoneLabel: string;
    disable?: boolean;
  }) {
    const fileInputHtmlElementId = useId();

    return (
      <div
        className={cn(
          'flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl',
          className,
          {
            'pointer-events-none opacity-60': disable,
          }
        )}
      >
        {match({ src: this.src })
          .with({ src: undefined }, () => (
            <Label
              htmlFor={fileInputHtmlElementId}
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <Text className="font-bold text-xl text-black/75 m-2">{dropzoneLabel}</Text>
              <FileInput
                onChange={(e) => readHTMLImageInput(e).then((file) => this.setSrc(file))}
                id={fileInputHtmlElementId}
                accept="image/*"
                className="hidden"
              />
            </Label>
          ))
          .otherwise(() => (
            <AvatarEditor
              //@ts-ignore
              ref={this.editor}
              backgroundColor="white"
              border={0}
              className={cn(className, 'w-full h-full rounded-lg')}
              height={this.pictureHeight}
              width={this.pictureWidth}
              image={this.src!}
            ></AvatarEditor>
          ))}
      </div>
    );
  }
}
