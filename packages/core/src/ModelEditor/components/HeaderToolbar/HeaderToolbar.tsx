import React, { FC } from 'react'
import { Paper } from '@mui/material'

import * as Items from './Items'

export interface HeaderToolbarProps {
  className?: string
}

const defaultItems = Object.entries(Items).map(([name, Item]) => (
  <Item key={name} />
))

export const HeaderToolbar: FC<HeaderToolbarProps> = ({
  className,
  children = defaultItems,
}) => {
  return <Paper className={className}>{children}</Paper>
}
