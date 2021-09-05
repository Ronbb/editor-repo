import React, { FC } from 'react'
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
  return <Item disabled tooltip={'Bold'} icon={FormatBold} />
}

export const Clear: FC = () => {
  return <Item disabled tooltip={'Clear'} icon={FormatClear} />
}

export const ColorFill: FC = () => {
  return <Item disabled tooltip={'ColorFill'} icon={FormatColorFill} />
}

export const ColorReset: FC = () => {
  return <Item disabled tooltip={'ColorReset'} icon={FormatColorReset} />
}

export const ColorText: FC = () => {
  return <Item disabled tooltip={'ColorText'} icon={FormatColorText} />
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
  return <Item disabled tooltip={'Italic'} icon={FormatItalic} />
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
  return <Item disabled tooltip={'Strikethrough'} icon={FormatStrikethrough} />
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
