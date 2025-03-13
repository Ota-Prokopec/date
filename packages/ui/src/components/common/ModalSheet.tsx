import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { Sheet } from 'react-modal-sheet'

type SheetDetent = `${'content' | 'full'}-height`
type SheetProps = {
  children: ReactNode
  header?: ReactNode
  className?: string
  detent?: SheetDetent
}

type ConstructorProps = {
  initiallyOpen: boolean
  stateHook: typeof useState
}

export class ModalSheet {
  private state: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }

  constructor({ initiallyOpen = false, stateHook }: ConstructorProps) {
    const state = stateHook<boolean>(initiallyOpen)
    this.state = { isOpen: state[0], setIsOpen: state[1] }

    this.Sheet = this.Sheet.bind(this)
    this.TriggerButton = this.TriggerButton.bind(this)
    this.useState = this.useState.bind(this)
  }

  Sheet({ children, header, className, detent = 'content-height' }: SheetProps) {
    return this.state.isOpen ? (
      <Sheet
        detent={detent}
        className={className}
        isOpen={true}
        onClose={() => this.state.setIsOpen(false)}
      >
        <Sheet.Container>
          <Sheet.Header>{header}</Sheet.Header>
          <Sheet.Content>
            <Sheet.Scroller>{children}</Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    ) : undefined
  }

  TriggerButton({ children }: { children: ReactNode }) {
    return <button onClick={() => this.state.setIsOpen(true)}>{children}</button>
  }

  useState() {
    return this.state
  }
}
