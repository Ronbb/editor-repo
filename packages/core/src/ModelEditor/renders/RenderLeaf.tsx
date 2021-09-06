import React, { useMemo } from 'react'
import { RenderLeafProps } from 'slate-react'
import { formatStyle } from '@/utils/formatStyle'
import { keyframes } from '@emotion/css'

const RenderLeaf: (props: RenderLeafProps) => JSX.Element = ({
  children,
  attributes,
  leaf,
}) => {
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
      {...attributes}
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

export default RenderLeaf
