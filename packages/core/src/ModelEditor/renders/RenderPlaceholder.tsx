import React from 'react'
import { PlaceholderRenderer } from './interface'

const RenderPlaceholder: PlaceholderRenderer = ({ children, attributes }) => {
  return <span {...attributes}>{children}</span>
}

export default RenderPlaceholder
