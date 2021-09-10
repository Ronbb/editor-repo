import React, { useMemo } from 'react'
import { keyframes } from '@emotion/css'
import { formatStyle } from '@/utils/formatStyle'
import { LeafContentRenderer, LeafRenderer } from './interface'

export const RenderLeafContent: LeafContentRenderer = ({ children, leaf }) => {
  const bling = useMemo(
    () =>
      leaf.highlight &&
      leaf.fill &&
      keyframes`
        from {
          background-color: ${leaf.highlight};
        }

        to {
          background-color: ${leaf.fill};
        }
    `,
    [leaf.fill, leaf.highlight]
  )

  if (leaf.bold) {
    children = <b>{children}</b>
  }

  if (leaf.italic) {
    children = <i>{children}</i>
  }

  if (leaf.strikethrough) {
    // MDN recommands `<del>` when editing document, see:
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/del
    children = <s style={{}}>{children}</s>
  }

  if (leaf.underline) {
    children = <u style={{}}>{children}</u>
  }

  return (
    <span
      style={{
        color: leaf.color,
        fontSize: formatStyle(leaf.size),
        backgroundColor: bling ? 'unset' : leaf.fill ?? leaf.highlight,
        animation: bling
          ? `${bling} 2s ease-in-out infinite alternate `
          : 'unset',
      }}
    >
      {children}
    </span>
  )
}

const RenderLeaf: LeafRenderer = ({ attributes, ...rest }) => {
  return (
    <span {...attributes}>
      <RenderLeafContent {...rest} />
    </span>
  )
}

export default RenderLeaf
