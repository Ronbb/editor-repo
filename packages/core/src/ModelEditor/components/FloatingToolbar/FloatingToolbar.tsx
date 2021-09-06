import React, { FC, useMemo } from 'react'
import { Box, Stack } from '@mui/material'

import * as Items from './Items'
import { FloatingToolbarProvider } from './Context'

export interface FloatingToolbarProps {
  className?: string
}

const defaultItems = Object.entries(Items).map(([name, Item]) => (
  <Item key={name} />
))

const FloatingToolbar: FC<FloatingToolbarProps> = ({
  className,
  children = defaultItems,
}) => {
  return useMemo(
    () => (
      <FloatingToolbarProvider>
        <Box className={className}>
          <Stack direction="column" spacing={2}>
            {children}
          </Stack>
        </Box>
      </FloatingToolbarProvider>
    ),
    [children, className]
  )
}

export default FloatingToolbar
