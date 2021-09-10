import React, { useMemo } from 'react'
import { Chip, Theme } from '@mui/material'
import { useSelected } from 'slate-react'
import { createStyles, makeStyles } from '@mui/styles'
import { Text } from 'slate'
import { usePreviousSibling } from '@/ModelEditor/hooks/usePreviousSibling'
import { RenderLeafContent } from '../RenderLeaf'
import { ElementRenderer } from '../interface'

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'inline',
        boxShadow: ({ selected }: { selected: boolean }) =>
          selected ? `0 0 0 3px ${theme.palette.action.active}` : 'none',
        userSelect: 'none',
        margin: '0 2px',
        verticalAlign: 'unset !important',
        color: 'inherit !important',
        fontSize: 'inherit !important',
      },
    }),
  {
    name: 'data-ref',
  }
)

const DataRef: ElementRenderer<'data-ref'> = ({
  children,
  attributes,
  element,
}) => {
  const selected = useSelected()
  const classes = useStyles({ selected })
  const previousSibling = usePreviousSibling(element)

  // render label with previous sibling
  const label = useMemo(() => {
    if (!previousSibling || !Text.isText(previousSibling)) {
      return element.key
    }
    return (
      <RenderLeafContent text={previousSibling} leaf={previousSibling}>
        {element.key}
      </RenderLeafContent>
    )
  }, [element.key, previousSibling])

  return (
    <span {...attributes}>
      <Chip
        draggable
        component="span"
        contentEditable={false}
        label={label}
        size="small"
        className={classes.root}
      />
      {children}
    </span>
  )
}

export default DataRef
