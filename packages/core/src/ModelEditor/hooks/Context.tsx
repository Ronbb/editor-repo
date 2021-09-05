import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useImmutableCallback } from '@/utils/hooks/useImmutableCallback'
import { noop } from '@/utils/noop'

type ModelEditorContextValue = {
  search: string
  setSearch: (search: string) => void
}

const ModelEditorContext = createContext<ModelEditorContextValue>(null as any)

export interface ModelEditorProviderProps {
  onSearch?: (search?: string) => void
}

export const ModelEditorProvider: FC<ModelEditorProviderProps> = ({
  children,
  onSearch = noop,
}) => {
  const [search, setSearch] = useState<string>('')
  const immutableOnSearch = useImmutableCallback(onSearch)

  useEffect(() => {
    immutableOnSearch(search)
  }, [search])

  return (
    <ModelEditorContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </ModelEditorContext.Provider>
  )
}

export const useSearch = (): [
  ModelEditorContextValue['search'],
  ModelEditorContextValue['setSearch']
] => {
  const { search, setSearch } = useContext(ModelEditorContext)
  return [search, setSearch]
}
