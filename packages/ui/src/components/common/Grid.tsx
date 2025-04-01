import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Grid<TGridString extends string> =
  TGridString extends `${infer TFirst extends number}x${infer TSecond extends number}`
    ? [TFirst, TSecond]
    : never

const getGridLayout = <TGridString extends `${number}x${number}`>(
  gridString: TGridString
): Grid<TGridString> => {
  const params = gridString.split('x').map(Number)
  if (params.length !== 2) throw new Error('Invalid grid string')
  const grid: [number, number] = [params[0]!, params[1]!]
  return grid as Grid<TGridString>
}

type GridProps<TGridString extends string> = {
  children: ReactNode
  grid: TGridString
  className?: string
}
export const Grid = <TGridString extends `${number}x${number}`>({
  children,
  grid: params,
  className,
}: GridProps<TGridString>) => {
  const gridLayout = getGridLayout(params)
  return (
    <div
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${gridLayout[1]}, 1fr)`,
        gridTemplateRows: `repeat(${gridLayout[0]}, 1fr)`,
      }}
    >
      {children}
    </div>
  )
}
