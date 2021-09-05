import React, { FC, VFC } from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import { Button, IconButton, Tooltip } from '@mui/material'

export interface ItemProps {
  tooltip?: string
  onClick?: () => void
}

export const Item: FC<ItemProps> = ({ onClick, tooltip = '', children }) => {
  return (
    <Button size="small" onClick={onClick}>
      <Tooltip placement="top" title={tooltip}>
        <span>{children}</span>
      </Tooltip>
    </Button>
  )
}

export interface IconItemProps {
  tooltip?: string
  icon: SvgIconComponent
  onClick?: () => void
}

export const IconItem: VFC<IconItemProps> = ({
  icon: IconComponent,
  tooltip = '',
  onClick,
}) => {
  return (
    <IconButton size="small" onClick={onClick}>
      <Tooltip placement="top" title={tooltip}>
        <IconComponent fontSize="inherit" />
      </Tooltip>
    </IconButton>
  )
}
