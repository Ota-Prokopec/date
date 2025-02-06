'use client';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export type TinderCardProps = {
  children: ReactNode;
  className?: string;
  onSwipe: (swipe: 'left' | 'right') => void;
  disableSwiping?: boolean;
};

export const swipeAngle = 80;

export const TinderCard = ({ children, className, onSwipe, disableSwiping = false }: TinderCardProps) => {
  const controls = useAnimation();
  const [exitDirection, setExitDirection] = useState<1 | -1 | null>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const { setSwipe, swipe } = useTinderCardContext();

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.div
      className={className}
      drag={disableSwiping ? undefined : 'x'}
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={(event, { offset, velocity }) => {
        setSwipe(offset.x);
      }}
      onDragEnd={(event, { offset, velocity }) => {
        setSwipe(0);
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          onSwipe('left');
        } else if (swipe > swipeConfidenceThreshold) {
          onSwipe('right');
        }
      }}
      animate={controls}
      initial={{ opacity: 1 }}
      exit={{ x: exitDirection ? window.innerWidth * exitDirection : 0, opacity: 0 }}
      style={{
        x: x,
        cursor: 'grab',
        rotate: rotate,
        transformOrigin: 'bottom center', // Pivot rotation from the bottom-center
      }}
    >
      {children}
    </motion.div>
  );
};

export type TinderCardContextProviderProps = {
  children: ReactNode;
};

const Context = createContext<{
  swipe: number;
  setSwipe: Dispatch<SetStateAction<number>>;
} | null>(null);

export const useTinderCardContext = () => {
  const contextValue = useContext(Context);
  if (!contextValue) throw new Error('Use this hook within the TinderCardContextProvider');
  return contextValue;
};

export const TinderCardContextProvider = ({ children }: TinderCardContextProviderProps) => {
  const [swipe, setSwipe] = useState<number>(0);

  return <Context.Provider value={{ swipe, setSwipe }}>{children}</Context.Provider>;
};
