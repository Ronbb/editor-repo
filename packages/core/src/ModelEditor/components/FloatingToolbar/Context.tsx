import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type FloatingToolbarContextValue = {
  activeId?: string
  setActiveId: Dispatch<SetStateAction<string | undefined>>
}

const FloatingToolbarContext = createContext<FloatingToolbarContextValue>(
  null as any
)

export const FloatingToolbarProvider: FC = ({ children }) => {
  const [activeId, setActiveId] = useState<string>()

  return (
    <FloatingToolbarContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </FloatingToolbarContext.Provider>
  )
}

export const useActiveId = () => {
  const { activeId, setActiveId } = useContext(FloatingToolbarContext)
  return [activeId, setActiveId] as const
}
