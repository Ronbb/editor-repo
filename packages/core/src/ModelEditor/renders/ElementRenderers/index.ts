import { ElementType } from '@/custom-elements'
import { ElementRenderer } from '../interface'
import BlockQuote from './BlockQuote'
import DataRef from './DataRef'
import Paragraph from './Paragraph'

export const ElementRenders: {
  [P in ElementType]: ElementRenderer<P>
} = {
  'block-quote': BlockQuote,
  'data-ref': DataRef,
  paragraph: Paragraph,
}

export const TypedElementRenders = ElementRenders as unknown as Record<
  ElementType,
  ElementRenderer
>
