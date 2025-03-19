import type { ReactNode } from 'react'
import { EditAccountProfileItem } from '../forms/EditAccountProfileItem'

type Item = {
  title: string
  description: string
  formField: ReactNode
}

export type FormPaginatorDownItems = Item[]

type FowmPaginatorDown = {
  items: FormPaginatorDownItems
  index: number
}

export const FormPaginatorDown = ({ items, index = 1 }: FowmPaginatorDown) => {
  return items.slice(0, index).map(({ formField, title, description }, i) => (
    <EditAccountProfileItem
      description={index - 1 === i ? description : undefined}
      key={i}
      className=""
      title={title}
    >
      {formField}
    </EditAccountProfileItem>
  ))
}
