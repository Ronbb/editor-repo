import React, { FC, useMemo } from 'react'
import { TextField } from '@mui/material'

import { useSearch } from '@/ModelEditor/hooks/Context'
import { Item } from './Item'

export const Search: FC = () => {
  const [search, setSearch] = useSearch()

  return useMemo(() => {
    return (
      <Item>
        <TextField
          size="small"
          label="Search"
          variant="standard"
          value={search}
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
      </Item>
    )
  }, [search, setSearch])
}
