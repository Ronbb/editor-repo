import React, { FC } from 'react'
import { Paper, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx'

export interface ItemProps {
  className?: string
}

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(1),
      },
    }),
  {
    name: 'item',
  }
)

export const Item: FC<ItemProps> = ({ className, children }) => {
  const classes = useStyles()

  return <Paper className={clsx(classes.root, className)}>{children}</Paper>
}
