import { cn } from '../lib/utils';
import {
  useRef,
  useState,
  type ChangeEvent,
  type Dispatch,
  type LegacyRef,
  type MutableRefObject,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

export class ImgInput {
  public img: string | undefined;
  public setImg: Dispatch<SetStateAction<string | undefined>>;
  inputTagRef: MutableRefObject<HTMLInputElement | null>;

  constructor() {
    const [img, setImg] = useState<string | undefined>(undefined);
    this.img = img;
    this.setImg = setImg;
    this.inputTagRef = useRef<HTMLInputElement | null>(null);
    this.onChange = this.onChange.bind(this);
    this.InputReactComponent = this.InputReactComponent.bind(this);
  }

  private onChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; // Get the first selected file
    if (file) {
      const reader = new FileReader(); // Create a new FileReader instance

      // Define what happens when the file is read
      reader.onloadend = () => {
        this.setImg(reader.result?.toString()); // Set the image preview (base64 string) to state
      };

      // Start reading the file as a Data URL (base64)
      reader.readAsDataURL(file);
    }
  }

  InputReactComponent({ className }: { className?: string }) {
    return (
      <input
        type="file"
        className={cn(className)}
        onChange={this.onChange}
        ref={this.inputTagRef}
      ></input>
    );
  }
}
