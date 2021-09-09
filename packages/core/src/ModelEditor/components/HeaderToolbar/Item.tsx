import React, {
  ForwardRefRenderFunction,
  FC,
  forwardRef,
  MouseEvent,
  useRef,
  ReactNode,
} from 'react'
import { SvgIconComponent } from '@mui/icons-material'
import { IconButton, Paper, Popover, Theme, Tooltip } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { useActiveId } from './Context'

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      popItem: {
        padding: theme.spacing(1),
      },
    }),
  {
    name: 'header-toolbar-item',
  }
)

export interface ItemBaseProps {
  tooltip?: string
  icon: SvgIconComponent
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

const ItemBase: ForwardRefRenderFunction<HTMLButtonElement, ItemBaseProps> = (
  { icon: IconComponent, tooltip = '', active, disabled, onClick },
  ref
) => {
  return (
    <IconButton
      ref={ref}
      component="button"
      disabled={disabled}
      color={active ? 'primary' : 'default'}
      onMouseDown={(event: MouseEvent) => {
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

export const Item = forwardRef(ItemBase)

const usePopItem = (id: string) => {
  const [activeId, setActiveId] = useActiveId()

  return [
    activeId === id,
    () => {
      setActiveId((prev) => (prev === id ? undefined : id))
    },
  ] as const
}

export interface PopItemProps extends Omit<ItemBaseProps, 'onClick'> {
  id: string
  children: NonNullable<ReactNode>
}

export const PopItem: FC<PopItemProps> = ({ id, children, ...rest }) => {
  const classes = useStyles()
  const anchorElRef = useRef<HTMLButtonElement>(null)

  const [open, handleClick] = usePopItem(id)
  return (
    <>
      <Item ref={anchorElRef} {...rest} onClick={handleClick} />
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        anchorEl={anchorElRef.current}
        onClose={handleClick}
      >
        <Paper className={classes.popItem}>{children}</Paper>
      </Popover>
    </>
  )
}
