'use client'
import { type CSSProperties, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { DynamicElement } from './DynamicElement'

export type TextProps = {
  children: ReactNode
  tagName?: 'p' | 'h1' | 'h2' | 'h3'
  className?: string
  style?: CSSProperties
  boldStyle?: boolean
}

export const Text = ({ children, tagName, className, style, boldStyle }: TextProps) => {
  return (
    <DynamicElement
      style={style}
      className={cn(
        'dark:text-darkModeTextColor text-lightModeTextColor',
        { 'font-bold text-black/75 dark:text-white/75': boldStyle },
        className
      )}
      tagName={tagName ?? 'p'}
    >
      {children}
    </DynamicElement>
  )
}
