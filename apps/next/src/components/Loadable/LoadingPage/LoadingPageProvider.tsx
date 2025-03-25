import {
  createContext,
  use,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'
import { LoadingPage } from './LoadingPage'

type ContextType = {
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
} | null

const Context = createContext<ContextType>(null)

type LoadingPageProviderProps = {
  children: ReactNode
  className?: string
}

export const LoadingPageProvider = ({ children, className }: LoadingPageProviderProps) => {
  const [isLoading, setLoading] = useState<boolean>(false)

  return (
    <Context.Provider value={{ isLoading, setLoading }}>
      <LoadingPage className={className} isLoading={isLoading}>
        {children}
      </LoadingPage>
    </Context.Provider>
  )
}

export const useLoadingPage = () => {
  const context = use(Context)
  if (!context) throw new Error('useLoadingPage hook has to be used within')
  return context
}
