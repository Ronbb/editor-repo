import { useSlateStatic } from 'slate-react'
import { CustomText } from '@/custom-types'
import { useCallback, useMemo } from 'react'
import { Editor } from 'slate'
import { useMarks } from './useMarks'

type TextMark = Omit<CustomText, 'text'>
type TextMarkKey = keyof TextMark

type useMarkResult<M extends TextMarkKey> = [
  result: TextMark[M] | undefined,
  addMark: (value: Required<TextMark>[M]) => void,
  removeMark: () => void
]

export const useTextMark = <M extends TextMarkKey>(
  mark: M
): useMarkResult<M> => {
  const editor = useSlateStatic()
  const marks = useMarks()
  const result = marks?.[mark]

  const addMark = useCallback<useMarkResult<M>['1']>(
    (value) => Editor.addMark(editor, mark, value),
    [editor, mark]
  )

  const removeMark = useCallback<useMarkResult<M>['2']>(
    () => Editor.removeMark(editor, mark),
    [editor, mark]
  )

  return useMemo(() => {
    return [result, addMark, removeMark]
  }, [addMark, removeMark, result])
}
