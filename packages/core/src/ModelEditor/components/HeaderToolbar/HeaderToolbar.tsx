import React, { FC } from 'react'
import { Paper } from '@mui/material'

import * as Items from './Items'
import clsx from 'clsx'
import { css } from '@emotion/css'
import { HeaderToolbarProvider } from './Context'

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
  return (
    <HeaderToolbarProvider>
      <Paper
        className={clsx(
          className,
          css`
            user-select: none;
          `
        )}
      >
        {children}
      </Paper>
    </HeaderToolbarProvider>
  )
}
