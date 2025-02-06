'use client';
import { createElement, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type DynamicElementProps<ExtendingProps extends HTMLAttributes<HTMLElement>> = {
  children?: ReactNode;
  className?: string;
  tagName: string;
  style?: CSSProperties;
} & ExtendingProps;

export const DynamicElement = <ExtendingProps extends HTMLAttributes<HTMLElement>>({
  children,
  className,
  tagName,
  style,
  ...props
}: DynamicElementProps<ExtendingProps>) => {
  return createElement(
    tagName,
    {
      className: cn(className),
      style: style,
      ...props,
    },
    children
  );
};
