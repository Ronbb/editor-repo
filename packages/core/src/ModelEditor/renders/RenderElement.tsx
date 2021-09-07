import React from 'react'
import { RenderElementProps } from 'slate-react'

const RenderElement: (props: RenderElementProps) => JSX.Element = ({
  children,
  attributes,
  element,
}) => {
  switch (element.type) {
    default:
      return <p {...attributes}>{children}</p>
  }
}

export default RenderElement
