import { BaseEditor, BaseRange } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { CustomElement } from './custom-elements'
import { ElementsEditor } from './extensions/withElements'

export type NumberWithUnit<U extends string = string> = {
  number: number
  unit: U
}

export type Color = string

export type Align = 'left' | 'center' | 'right' | 'justify'

export type CustomText = {
  text: string
  // used by search
  highlight?: Color
  bold?: true
  italic?: true
  underline?: true
  strikethrough?: true
  color?: Color
  fill?: Color
  size?: NumberWithUnit<'px' | 'em' | 'rem'>
}

export type CustomRange = BaseRange & {
  highlight?: Color
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor & ElementsEditor
    Element: CustomElement
    Text: CustomText
    Range: CustomRange
  }
}

export * from './custom-elements'
