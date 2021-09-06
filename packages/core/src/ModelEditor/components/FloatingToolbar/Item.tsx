import React, { FC, useRef } from 'react'
import { IconButton, Paper, Popper, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { SvgIconComponent } from '@mui/icons-material'
import { useActiveId } from './Context'

export interface ItemProps {
  id: string
  className?: string
  icon: SvgIconComponent
}

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(1),
      },
      popover: {},
    }),
  {
    name: 'item',
  }
)

const useItem = (id: string) => {
  const [activeId, setActiveId] = useActiveId()

  return [
    activeId === id,
    () => {
      setActiveId((prev) => (prev === id ? undefined : id))
    },
  ] as const
}

export const Item: FC<ItemProps> = ({
  className,
  children,
  id,
  icon: IconComponent,
}) => {
  const classes = useStyles()

  const anchorElRef = useRef<HTMLButtonElement>(null)

  const [open, handleClick] = useItem(id)

  return (
    <>
      <IconButton ref={anchorElRef} onClick={handleClick}>
        <IconComponent />
      </IconButton>
      <Popper
        className={classes.popover}
        open={open}
        anchorEl={anchorElRef.current}
        placement="left"
      >
        <Paper className={clsx(classes.root, className)}>{children}</Paper>
      </Popper>
    </>
  )
}
