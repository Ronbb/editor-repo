import { BaseEditor, BaseRange } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

export type NumberWithUnit<U extends string = string> = {
  number: number
  unit: U
}

export type Color = string

export type Align = 'left' | 'center' | 'right' | 'justify'

export type CustomText = {
  text: string
  // used by search
  highlight?: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  color?: Color
  fill?: Color
  size?: NumberWithUnit<'px' | 'em' | 'rem'>
}

export type Paragraph = {
  type: 'paragraph'
  children: CustomText[]
  align?: Align
  indent?: NumberWithUnit<'px' | 'em' | 'rem'>
}

export type CustomElement = Paragraph

export type CustomRange = BaseRange & {
  highlight?: boolean
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
    Range: CustomRange
  }
}
