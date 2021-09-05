import React, { FC, useMemo } from 'react'
import { Paper, Stack } from '@mui/material'

import * as Items from './Items'

export interface FooterToolbarProps {
  className?: string
}

const defaultItems = Object.entries(Items).map(([name, Item]) => (
  <Item key={name} />
))

export const FooterToolbar: FC<FooterToolbarProps> = ({
  className,
  children = defaultItems,
}) => {
  return useMemo(
    () => (
      <Paper className={className}>
        <Stack direction="row" spacing={2}>
          {children}
        </Stack>
      </Paper>
    ),
    [children, className]
  )
}
