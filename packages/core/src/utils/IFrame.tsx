import { css } from '@emotion/css'
import React, { FC, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'

const windowToIFrame = new WeakMap<Node, Node>()
const iframeToWindow = new WeakMap<Node, Node>()

const cloneToIFrame = (node: Node, target: Node) => {
  const cloned = node.cloneNode(true)
  target.appendChild(cloned)
  windowToIFrame.set(node, cloned)
  iframeToWindow.set(cloned, node)
}

const updateTpIFrame = (node: Node, target: Node) => {
  removeFromIFrame(node, target)
  cloneToIFrame(node, target)
}

const removeFromIFrame = (node: Node, from: Node) => {
  const local = windowToIFrame.get(node)
  if (local) {
    from.removeChild(local)
  }
}

export const IFrame: FC<JSX.IntrinsicElements['iframe']> = ({
  children,
  ...props
}) => {
  const contentRef = useRef<HTMLIFrameElement>(null)
  const mountNode = contentRef.current?.contentWindow?.document?.body

  const observer = useMemo(
    () =>
      new MutationObserver((mutations) => {
        const headNode = contentRef.current?.contentWindow?.document?.head
        if (!headNode) {
          console.error('headNode is not existed')
          return
        }

        mutations.forEach((mutation) => {
          switch (mutation.type) {
            case 'attributes':
              updateTpIFrame(mutation.target, headNode)
              break
            case 'characterData':
              updateTpIFrame(mutation.target, headNode)
              break
            case 'childList':
              mutation.addedNodes.forEach((added) => {
                cloneToIFrame(added, headNode)
              })
              mutation.removedNodes.forEach((removed) => {
                removeFromIFrame(removed, headNode)
              })
              break
            default:
              break
          }
        })
      }),
    []
  )

  useEffect(() => {
    const headNode = contentRef.current?.contentWindow?.document?.head
    if (!headNode) {
      return
    }

    document.head.childNodes.forEach((child) => {
      cloneToIFrame(child, headNode)
    })

    observer.observe(document.head, {
      characterData: true,
      childList: true,
      subtree: true,
    })
    return () => observer.disconnect()
  }, [observer])

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
      ref={contentRef}
    >
      {mountNode &&
        createPortal(<div id="iframe-root">{children}</div>, mountNode)}
    </iframe>
  )
}
