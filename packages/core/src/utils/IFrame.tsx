import { css } from '@emotion/css'
import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'

export const IFrame: FC<JSX.IntrinsicElements['iframe']> = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null)
  const mountNode =
    contentRef &&
    contentRef.contentWindow &&
    contentRef.contentWindow.document.body
  return (
    <iframe
      className={css`
        border: none;
        width: 100%;
        height: 100%;
        overflow-y: auto;
      `}
      {...props}
      title="editor-iframe"
      ref={setContentRef}
    >
      {mountNode && createPortal(React.Children.only(children), mountNode)}
    </iframe>
  )
}
