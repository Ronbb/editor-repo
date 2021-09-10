import { Element } from 'slate'
import { Align, Color, CustomText, NumberWithUnit } from './custom-types'

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

export type DataRef = {
  type: 'data-ref'
  children: CustomText[]
  key: string
}

export type CustomElement = Paragraph | BlockQuote | DataRef

export type ElementType = CustomElement['type']

export type ExplicitElement<T extends ElementType> = Extract<
  Element,
  { type: T }
>

export const IsInlineElements: Partial<Record<ElementType, boolean>> = {
  'data-ref': true,
}

export const IsVoidElements: Partial<Record<ElementType, boolean>> = {}
