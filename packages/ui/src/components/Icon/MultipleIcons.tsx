'use client';
import { type ReactNode, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { useMount } from '../../hooks/useMount';

type ItemType = { icon: ReactNode; key: number | string };

type MultipleIconsProps<Items extends ItemType[]> = {
  className?: string;
  onClick?: (iconIndex: Items[number]['key']) => void;
  initialVisibleIconIndex?: Items[number]['key'];
  items: Items;
};

export const MultipleIcons = <Items extends ItemType[]>({
  className,
  onClick,
  initialVisibleIconIndex = 0,
  items,
}: MultipleIconsProps<Items>) => {
  const [iconIndex, setIconIndex] = useState<Items[number]['key']>(initialVisibleIconIndex);
  const { isMounted } = useMount();

  useEffect(() => {
    if (!isMounted) return () => {};
    if (onClick) onClick(iconIndex);
  }, [iconIndex]);

  const IconToShow = items.filter((item) => item.key === iconIndex).at(0);

  return (
    <button
      onClick={() => {
        setIconIndex((c) => {
          const currentIcon = IconToShow;
          const firstIcon = items.at(0);

          if (!currentIcon) throw new Error('There is no current icon');

          if (items.length - 1 === items.indexOf(currentIcon)) {
            if (!firstIcon) throw new Error('There is no icon');
            return firstIcon['key'];
          } else {
            const nextIcon = items.at(items.indexOf(currentIcon) + 1);
            if (!nextIcon) throw new Error('There is no more icon');
            return nextIcon['key'];
          }
        });
      }}
      className={cn('rounded-full', className)}
    >
      {IconToShow && IconToShow.icon}
    </button>
  );
};
