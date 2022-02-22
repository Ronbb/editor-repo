import React, {  FC,  useMemo } from 'react'
import {  Node } from 'slate'
import {  useSlate } from 'slate-react'
import {  Item } from './Item'

export const Counter: FC = () => {
  const editor = useSlate()
  const { children: value } = editor

  const count = useMemo(() => {
    const texts = Node.texts(editor)
    let result = 0
    for (const [text] of texts) {
      result += text.text.length
    }

    return result
    // count should be recomputed everytime the value changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, value])

  return useMemo(
    () => <Item tooltip={`${count}`}>{`Count: ${count}`}</Item>,
    [count]
  )
}

export const Location: FC = () => {
  const editor = useSlate()
  const { selection } = editor

  const location = useMemo(() => {
    const result = {
      column: '0',
      row: '0',
    }
    if (!selection) {
      return result
    }

    result.row = selection.focus.path.join('-')
    result.column = selection.focus.offset.toString()

    return result
  }, [selection])

  return useMemo(
    () => (
      <Item
        tooltip={`${location.row},${location.column}`}
      >{`Location: ${location.row},${location.column}`}</Item>
    ),
    [location]
  )
}

export const ModeSwitcher: FC = () => {
  const editor = useSlate()
  const { selection } = editor

  const location = useMemo(() => {
    const result = {
      column: '0',
      row: '0',
    }
    if (!selection) {
      return result
    }

    result.row = selection.focus.path.join('-')
    result.column = selection.focus.offset.toString()

    return result
  }, [selection])

  return useMemo(
    () => <Item>{`Location: ${location.row},${location.column}`}</Item>,
    [location]
  )
}
