import { Textarea as ShadcnTextarea } from '../shadcn/textarea';

type ShadcnTextareaProps = Parameters<typeof ShadcnTextarea>[0];

export type TextareaProps = {
  onValueChange?: (value: string) => void;
} & ShadcnTextareaProps;

export const Textarea = ({ onValueChange, ...props }: TextareaProps) => {
  return (
    <ShadcnTextarea
      {...props}
      onChange={(e) => {
        if (onValueChange) onValueChange(e.target.value);
      }}
    ></ShadcnTextarea>
  );
};
