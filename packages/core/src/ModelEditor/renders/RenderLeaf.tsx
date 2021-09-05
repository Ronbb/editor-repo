import React from 'react'
import { css } from '@emotion/css'
import { RenderLeafProps } from 'slate-react'

const RenderLeaf: (props: RenderLeafProps) => JSX.Element = ({
  children,
  attributes,
  leaf,
}) => {
  return (
    <span
      {...attributes}
      className={css`
        background-color: ${leaf.highlight && '#ffeeba'};
      `}
    >
      {children}
    </span>
  )
}

export default RenderLeaf
