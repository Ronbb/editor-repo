import React, { FC, useEffect, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { Slate, Editable, withReact } from 'slate-react'
import { Paper, Stack } from '@mui/material'
import { css } from '@emotion/css'
import clsx from 'clsx'

import { useImmutableCallback } from '@/utils/hooks/useImmutableCallback'
import { noop } from '@/utils/noop'
import { IFrame } from '@/utils/IFrame'

import { HeaderToolbar } from './components/HeaderToolbar'
import { FooterToolbar } from './components/FooterToolbar'
import { ModelEditorProvider } from './hooks/Context'
import { decorateWith } from './renders/decorateWith'

import RenderElement from './renders/RenderElement'
import RenderLeaf from './renders/RenderLeaf'
import RenderPlaceholder from './renders/RenderPlaceholder'
import FloatingToolbar from './components/FloatingToolbar/FloatingToolbar'
import { withElements } from '@/extensions/withElements'

export interface ModelEditorProps {
  id?: string
  classes?: {
    [key: string]: string | undefined
    root?: string
    content?: string
    editable?: string
    headerToolbar?: string
    floatingToolbar?: string
    footerToolbar?: string
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
  value = initValue,
  onChange = noop,
}) => {
  const [editor] = useState(() =>
    withElements(withHistory(withReact(createEditor())))
  )
  const [innerValue, setInnerValue] = useState<Descendant[]>(value)
  const [search, setSearch] = useState<string>()

  const immutableOnChange = useImmutableCallback(onChange)

  useEffect(() => {
    immutableOnChange(innerValue)
  }, [innerValue])

  useEffect(() => {
    if (value) {
      setInnerValue(value)
    }
  }, [value])

  return (
    <Slate editor={editor} value={innerValue} onChange={setInnerValue}>
      <ModelEditorProvider onSearch={setSearch}>
        <Stack spacing={2} className={classes?.root}>
          <HeaderToolbar className={classes?.headerToolbar} />
          <Paper className={classes?.content}>
            <FloatingToolbar className={classes?.floatingToolbar} />
            <IFrame>
              <Editable
                id={id}
                className={clsx(
                  css`
                    p {
                      margin: 0;
                    }
                  `,
                  classes?.editable
                )}
                decorate={decorateWith(search)}
                renderElement={RenderElement}
                renderLeaf={RenderLeaf}
                renderPlaceholder={RenderPlaceholder}
              />
            </IFrame>
          </Paper>
          <FooterToolbar className={classes?.footerToolbar} />
        </Stack>
      </ModelEditorProvider>
    </Slate>
  )
}

export default ModelEditor
