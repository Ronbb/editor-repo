import { useSlateStatic } from 'slate-react'
import { useCallback, useMemo } from 'react'
import { Editor } from 'slate'
import { CustomText } from '@/custom-types'
import { useMarks } from './useMarks'

type TextMark = Omit<CustomText, 'text'>
type TextMarkKey = keyof TextMark

type useMarksResult = [
  marks: TextMark | null,
  addMark: (values: TextMark) => void,
  removeMark: (keys?: TextMarkKey[]) => void
]

export const useTextMarks = (): useMarksResult => {
  const editor = useSlateStatic()
  const marks = useMarks()

  const addMark = useCallback<useMarksResult['1']>(
    (values) => {
      Object.entries(values).forEach(([key, value]) => {
        Editor.addMark(editor, key, value)
      })
    },
    [editor]
  )

  const removeMark = useCallback<useMarksResult['2']>(
    (keys) => {
      if (keys) {
        keys.forEach((key) => Editor.removeMark(editor, key))
      } else {
        const marks = Editor.marks(editor)
        if (marks) {
          Object.keys(marks).forEach((key) => Editor.removeMark(editor, key))
        }
      }
    },
    [editor]
  )

  return useMemo(() => {
    return [marks, addMark, removeMark]
  }, [addMark, marks, removeMark])
}
