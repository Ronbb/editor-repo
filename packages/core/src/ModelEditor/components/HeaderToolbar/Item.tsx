import React, { FC } from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export interface ItemProps {
  tooltip?: string
  icon: SvgIconComponent
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

export const Item: FC<ItemProps> = ({
  icon: IconComponent,
  tooltip = '',
  active,
  disabled,
  onClick,
}) => {
  return (
    <IconButton
      disabled={disabled}
      color={active ? 'primary' : 'default'}
      onMouseDown={(event) => {
        event.preventDefault()
        onClick?.()
      }}
    >
      <Tooltip title={tooltip}>
        <IconComponent fontSize="inherit" />
      </Tooltip>
    </IconButton>
  )
}
