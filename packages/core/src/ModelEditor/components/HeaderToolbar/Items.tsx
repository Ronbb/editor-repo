import React, { FC, useCallback, useState } from 'react'
import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatClear,
  FormatColorFill,
  FormatColorReset,
  FormatColorText,
  FormatIndentDecrease,
  FormatIndentIncrease,
  FormatItalic,
  FormatLineSpacing,
  FormatListBulleted,
  FormatListNumbered,
  FormatListNumberedRtl,
  FormatPaint,
  FormatQuote,
  FormatShapes,
  FormatSize,
  FormatStrikethrough,
  FormatTextdirectionLToR,
  FormatTextdirectionRToL,
  FormatUnderlined,
} from '@mui/icons-material'

import { Item } from './Item'
import { useTextMark } from '@/ModelEditor/hooks/useTextMark'
import { useTextMarks } from '@/ModelEditor/hooks/useTextMarks'
import ColorPickerDialog from '../ColorPicker/ColorPickerDialog'
import { Color } from '@/custom-types'

export const AlignCenter: FC = () => {
  return <Item disabled tooltip={'AlignCenter'} icon={FormatAlignCenter} />
}

export const AlignJustify: FC = () => {
  return <Item disabled tooltip={'AlignJustify'} icon={FormatAlignJustify} />
}

export const AlignLeft: FC = () => {
  return <Item disabled tooltip={'AlignLeft'} icon={FormatAlignLeft} />
}

export const AlignRight: FC = () => {
  return <Item disabled tooltip={'AlignRight'} icon={FormatAlignRight} />
}

export const Bold: FC = () => {
  const [active, addMark, removeMark] = useTextMark('bold')
  const handleClick = () => {
    if (active) {
      removeMark()
    } else {
      addMark(true)
    }
  }

  return (
    <Item
      active={active}
      tooltip={'Bold'}
      icon={FormatBold}
      onClick={handleClick}
    />
  )
}

export const Clear: FC = () => {
  const [, , removeMark] = useTextMarks()
  return <Item tooltip={'Clear'} icon={FormatClear} onClick={removeMark} />
}

export const ColorFill: FC = () => {
  const [open, setOpen] = useState(false)
  const [color, addMark] = useTextMark('fill')

  const handleChange = useCallback(
    (color: Color) => {
      if (open) {
        addMark(color)
      }
    },
    [addMark, open]
  )

  const openDialog = useCallback(() => setOpen(true), [])
  const closeDialog = useCallback(() => setOpen(false), [])

  return (
    <>
      <Item tooltip={'ColorFill'} icon={FormatColorFill} onClick={openDialog} />
      <ColorPickerDialog
        open={open}
        color={color ?? '#000000'}
        onChange={handleChange}
        onClose={closeDialog}
      />
    </>
  )
}

export const ColorReset: FC = () => {
  const [color, , removeMark] = useTextMark('color')
  return (
    <Item
      disabled={!color}
      tooltip={'ColorReset'}
      icon={FormatColorReset}
      onClick={removeMark}
    />
  )
}

export const ColorText: FC = () => {
  const [open, setOpen] = useState(false)
  const [color, addMark] = useTextMark('color')

  const handleChange = useCallback(
    (color: Color) => {
      if (open) {
        addMark(color)
      }
    },
    [addMark, open]
  )

  const openDialog = useCallback(() => setOpen(true), [])
  const closeDialog = useCallback(() => setOpen(false), [])
  return (
    <>
      <Item tooltip={'ColorText'} icon={FormatColorText} onClick={openDialog} />
      <ColorPickerDialog
        open={open}
        color={color ?? '#000000'}
        onChange={handleChange}
        onClose={closeDialog}
      />
    </>
  )
}

export const IndentDecrease: FC = () => {
  return (
    <Item disabled tooltip={'IndentDecrease'} icon={FormatIndentDecrease} />
  )
}

export const IndentIncrease: FC = () => {
  return (
    <Item disabled tooltip={'IndentIncrease'} icon={FormatIndentIncrease} />
  )
}

export const Italic: FC = () => {
  const [active, addMark, removeMark] = useTextMark('italic')
  const handleClick = () => {
    if (active) {
      removeMark()
    } else {
      addMark(true)
    }
  }
  return <Item tooltip={'Italic'} icon={FormatItalic} onClick={handleClick} />
}

export const LineSpacing: FC = () => {
  return <Item disabled tooltip={'LineSpacing'} icon={FormatLineSpacing} />
}

export const ListBulleted: FC = () => {
  return <Item disabled tooltip={'ListBulleted'} icon={FormatListBulleted} />
}

export const ListNumbered: FC = () => {
  return <Item disabled tooltip={'ListNumbered'} icon={FormatListNumbered} />
}

export const ListNumberedRtl: FC = () => {
  return (
    <Item disabled tooltip={'ListNumberedRtl'} icon={FormatListNumberedRtl} />
  )
}

export const Paint: FC = () => {
  return <Item disabled tooltip={'Paint'} icon={FormatPaint} />
}

export const Quote: FC = () => {
  return <Item disabled tooltip={'Quote'} icon={FormatQuote} />
}

export const Shapes: FC = () => {
  return <Item disabled tooltip={'Shapes'} icon={FormatShapes} />
}

export const Size: FC = () => {
  return <Item disabled tooltip={'Size'} icon={FormatSize} />
}

export const Strikethrough: FC = () => {
  const [active, addMark, removeMark] = useTextMark('strikethrough')
  const handleClick = () => {
    if (active) {
      removeMark()
    } else {
      addMark(true)
    }
  }
  return (
    <Item
      tooltip={'Strikethrough'}
      icon={FormatStrikethrough}
      onClick={handleClick}
    />
  )
}

export const TextdirectionLToR: FC = () => {
  return (
    <Item
      disabled
      tooltip={'TextdirectionLToR'}
      icon={FormatTextdirectionLToR}
    />
  )
}

export const TextdirectionRToL: FC = () => {
  return (
    <Item
      disabled
      tooltip={'TextdirectionRToL'}
      icon={FormatTextdirectionRToL}
    />
  )
}

export const Underlined: FC = () => {
  return <Item disabled tooltip={'Underlined'} icon={FormatUnderlined} />
}
