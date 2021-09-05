import React from 'react'
import { RenderElementProps, useSlateStatic } from 'slate-react'

const RenderElement: (props: RenderElementProps) => JSX.Element = ({
  children,
  attributes,
  element,
}) => {
  const editor = useSlateStatic()
  const Tag = editor.isInline(element) ? 'span' : 'div'
  return (
    <Tag {...attributes} style={{ position: 'relative' }}>
      {children}
    </Tag>
  )
}

export default RenderElement
