import { Editor } from 'slate'
import { useSlate } from 'slate-react'

export const useMarks = () => {
  const editor = useSlate()
  return Editor.marks(editor)
}
