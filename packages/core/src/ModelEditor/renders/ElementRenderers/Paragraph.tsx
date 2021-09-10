import React from 'react'
import { ElementRenderer } from '../interface'

const Paragraph: ElementRenderer<'paragraph'> = ({
  children,
  attributes,
  // element,
}) => {
  return <p {...attributes}>{children}</p>
}

export default Paragraph
