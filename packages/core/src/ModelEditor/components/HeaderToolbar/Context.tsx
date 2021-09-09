import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type HeaderToolbarContextValue = {
  activeId?: string
  setActiveId: Dispatch<SetStateAction<string | undefined>>
}

const HeaderToolbarContext = createContext<HeaderToolbarContextValue>(
  null as any
)

export const HeaderToolbarProvider: FC = ({ children }) => {
  const [activeId, setActiveId] = useState<string>()

  return (
    <HeaderToolbarContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </HeaderToolbarContext.Provider>
  )
}

export const useActiveId = () => {
  const { activeId, setActiveId } = useContext(HeaderToolbarContext)
  return [activeId, setActiveId] as const
}
