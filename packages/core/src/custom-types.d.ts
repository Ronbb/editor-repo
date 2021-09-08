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
  highlight?: Color
  bold?: true
  italic?: true
  underline?: true
  strikethrough?: true
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

export type BlockQuote = {
  type: 'block-quote'
  children: CustomText[]
  background?: Color
}

export type CustomElement = Paragraph | BlockQuote

export type CustomRange = BaseRange & {
  highlight?: Color
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
    Range: CustomRange
  }
}

export type ElementType = CustomElement['type']

export type ExplicitElement<T extends ElementType> = Extract<
  Element,
  { type: T }
>
