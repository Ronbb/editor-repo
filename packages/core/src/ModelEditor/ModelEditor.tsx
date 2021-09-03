import React, { FC, useEffect, useState } from 'react'
import { createEditor, BaseEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { useImmutableCallback } from '@/utils/hooks/useImmutableCallback'
import { noop } from '@/utils/noop'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string; bold?: true }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

export interface ModelEditorProps {
  id?: string
  classes?: {
    content?: string
  }
  value?: Descendant[]
  onChange?: (value: Descendant[]) => void
}

const initValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

export const ModelEditor: FC<ModelEditorProps> = ({
  id,
  classes,
  value,
  onChange = noop,
}) => {
  const [editor] = useState(() => withReact(createEditor()))
  const [innerValue, setInnerValue] = useState<Descendant[]>(initValue)
  const immutableOnChange = useImmutableCallback(onChange)

  useEffect(() => {
    immutableOnChange(innerValue)
  }, [innerValue])

  useEffect(() => {
    if (value) {
      setInnerValue((inner) => (inner === value ? inner : value))
    }
  }, [value])

  return (
    <Slate editor={editor} value={innerValue} onChange={setInnerValue}>
      <Editable id={id} className={classes?.content} />
    </Slate>
  )
}

export default ModelEditor
