import { useState, type ReactNode } from 'react';
import { Sheet } from 'react-modal-sheet';

type SheetDetent = `${'content' | 'full'}-height`;
type SheetProps = {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  detent?: SheetDetent;
};

export class ModalSheet {
  public isOpen: boolean;
  public setIsOpen: (setOpenTo: boolean) => void;

  constructor({ initiallyOpen = false, detent }: { initiallyOpen: boolean; detent?: SheetDetent }) {
    const [isOpen, setIsOpen] = useState<boolean>(initiallyOpen);
    this.isOpen = isOpen;
    this.setIsOpen = setIsOpen;

    this.Sheet = this.Sheet.bind(this);
    this.TriggerButton = this.TriggerButton.bind(this);
    this.useState = this.useState.bind(this);
  }

  Sheet({ children, header, className, detent = 'content-height' }: SheetProps) {
    return (
      <Sheet
        detent={detent}
        className={className}
        isOpen={this.isOpen}
        onClose={() => this.setIsOpen(false)}
      >
        <Sheet.Container>
          <Sheet.Header>{header}</Sheet.Header>
          <Sheet.Content>
            <Sheet.Scroller>{children}</Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    );
  }

  TriggerButton({ children }: { children: ReactNode }) {
    return <button onClick={() => this.setIsOpen(true)}>{children}</button>;
  }

  useState() {
    return { isOpen: this.isOpen, setIsOpen: this.setIsOpen };
  }
}
