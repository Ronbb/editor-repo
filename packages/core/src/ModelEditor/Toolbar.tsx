import { SvgIconComponent } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React, { FC, ReactNode } from 'react'

export interface ItemProps {
  icon: SvgIconComponent
  onClick?: () => void
}

export const Item: FC<ItemProps> = ({ icon: IconComponent }) => {
  return (
    <IconButton>
      <IconComponent fontSize="inherit" />
    </IconButton>
  )
}

export interface ToolbarProps {
  className?: string
}

export const Toolbar: FC<ToolbarProps> = ({ className }) => {
  return <Box className={className}></Box>
}
