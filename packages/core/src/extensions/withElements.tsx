import { DataRef, IsInlineElements, IsVoidElements } from '@/custom-elements'
import { Editor, Element, Transforms } from 'slate'

export type ElementsEditor = {
  insertElement: (element: Element) => void
  insertDataRef: (key: DataRef['key']) => void
}

export const withElements = (editor: Editor) => {
  const { isInline, isVoid } = editor

  editor.isInline = (element) => {
    return IsInlineElements[element.type] ? true : isInline(element)
  }

  editor.isVoid = (element) => {
    return IsVoidElements[element.type] ? true : isVoid(element)
  }

  editor.insertElement = (element) => {
    Transforms.insertNodes(editor, element)
    Transforms.move(editor)
  }
  editor.insertDataRef = (key) => {
    const element: DataRef = {
      type: 'data-ref',
      key,
      children: [
        {
          text: '',
        },
      ],
    }
    editor.insertElement(element)
  }
  return editor
}
