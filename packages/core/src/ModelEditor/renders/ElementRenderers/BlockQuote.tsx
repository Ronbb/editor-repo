import React from 'react'
import { ElementRenderer } from '../interface'

const BlockQuote: ElementRenderer<'block-quote'> = ({
  children,
  attributes,
  // element,
}) => {
  return <blockquote {...attributes}>{children}</blockquote>
}

export default BlockQuote
