import { Element, Node } from 'slate'
import { ReactEditor, useSlateStatic } from 'slate-react'

export const usePreviousSibling = (element: Element) => {
  const editor = useSlateStatic()
  const path = ReactEditor.findPath(editor, element)
  const { length } = path

  if (length) {
    const prev = [...path]
    const last = prev[length - 1]
    if (last > 0) {
      prev[length - 1] -= 1
      return Node.get(editor, prev)
    }
  }

  return null
}
