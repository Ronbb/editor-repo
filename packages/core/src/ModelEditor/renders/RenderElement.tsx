import React from 'react'
import { TypedElementRenders } from './ElementRenderers'
import { ElementRenderer } from './interface'

const RenderElement: ElementRenderer = ({ children, attributes, element }) => {
  const Renderer = TypedElementRenders[element.type]
  return (
    <Renderer attributes={attributes} element={element}>
      {children}
    </Renderer>
  )
}

export default RenderElement
