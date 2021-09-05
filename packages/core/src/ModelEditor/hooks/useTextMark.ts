import { useSlateStatic } from 'slate-react'
import { CustomText } from '@/custom-types'
import { useMemo } from 'react'
import { Editor } from 'slate'

type TextMark = Omit<CustomText, 'text'>
type TextMarkKey = keyof TextMark

type useMarkResult<M extends TextMarkKey> = [
  result: TextMark[M] | undefined,
  addMark: (value: TextMark[M]) => void,
  removeMark: () => void
]

export const useTextMark = <M extends TextMarkKey>(
  mark: M
): useMarkResult<M> => {
  const editor = useSlateStatic()
  const { marks } = editor

  return useMemo(() => {
    return [
      marks?.[mark],
      (value) => Editor.addMark(editor, mark, value),
      () => Editor.removeMark(editor, mark),
    ]
  }, [editor, mark, marks])
}
