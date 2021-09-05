import React from 'react'
import { RenderPlaceholderProps } from 'slate-react'

const RenderPlaceholder: (props: RenderPlaceholderProps) => JSX.Element = ({
  children,
  attributes,
}) => {
  return <span {...attributes}>{children}</span>
}

export default RenderPlaceholder
