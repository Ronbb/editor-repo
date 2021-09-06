import React from 'react'
import { Box, buttonClasses, Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Descendant, ModelEditor } from '@/index'

import './App.css'
import '@/index.css'
import useLocalStorageState from './useLocalStorageState'

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      app: {
        backgroundColor: theme.palette.primary.light,
        width: '100%',
        height: '100%',
        padding: theme.spacing(4),
        boxSizing: 'border-box',
      },
      container: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows['2'],
        minHeight: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      },
      root: {
        height: '100%',
        boxSizing: 'border-box',
      },
      content: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
        position: 'relative',
        overflowY: 'auto',
        flexGrow: 1,
      },
      editable: {
        height: '100%',
        overflowY: 'auto',
      },
      headerToolbar: {
        boxShadow: theme.shadows['2'],
      },
      floatingToolbar: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: theme.spacing(1),
        zIndex: theme.zIndex.appBar,
      },
      footerToolbar: {
        padding: theme.spacing(1),
        boxShadow: theme.shadows['2'],
        [`& .${buttonClasses.root}`]: {
          color: theme.palette.text.secondary,
        },
      },
    }),
  {
    name: 'app',
  }
)

const initValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: '233',
        color: 'grey',
        // fill: '#adeeffb3',
        bold: true,
        strikethrough: true,
        underline: true,
        italic: true,
        size: { number: 24, unit: 'px' },
      },
    ],
  },
]

function App() {
  const classes = useStyles()
  const [value, setValue] = useLocalStorageState<Descendant[]>(
    'editor-value',
    initValue
  )

  return (
    <Box className={classes.app}>
      <Box className={classes.container}>
        <ModelEditor
          id="demo-editor"
          classes={classes}
          value={value}
          onChange={setValue}
        />
      </Box>
    </Box>
  )
}

export default App
