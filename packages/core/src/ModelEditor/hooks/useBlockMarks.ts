import { ElementType, ExplicitElement } from '@/custom-types'
import { isListElementType } from '@/utils/elements'
import { Editor, Element, Transforms } from 'slate'
import { useSlateStatic } from 'slate-react'

type ElementMark<T extends ElementType> = Omit<ExplicitElement<T>, 'type'>

export type useBlockMarksResult<T extends ElementType> =
  | [
      result: ElementMark<T>,
      addMarks: (marks: Partial<ElementMark<T>>) => void,
      removeMarks: () => void
    ]
  | [
      result: null,
      addMarks: (marks: ElementMark<T>) => void,
      removeMarks: () => void
    ]

export const useBlockMark = <T extends ElementType>(
  type: T
): useBlockMarksResult<T> => {
  const editor = useSlateStatic()
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === type,
  })

  const isList = isListElementType(type)

  if (match) {
    const [node] = match
    const { type, ...result } = node as ExplicitElement<T>
    return [
      result,
      (marks: Partial<ElementMark<T>>) => {
        Transforms.unwrapNodes(editor, {
          match: (n) => {
            const type = !Editor.isEditor(n) && Element.isElement(n) && n.type
            return type && isListElementType(type)
          },
          split: true,
        })
        const newProperties: Partial<Element> = {
          type: 'paragraph',
        }
        Transforms.setNodes(editor, newProperties)
      },
      () => {},
    ]
  }

  return []
}
