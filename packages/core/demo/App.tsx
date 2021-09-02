import React from 'react'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ModelEditor } from '@'

import './App.css'
import '@/index.css'

const useStyles = makeStyles<Theme>(
  (theme) => ({
    app: {
      backgroundColor: theme.palette.primary.light,
      width: '100%',
      height: '100%',
      padding: theme.spacing(4),
      boxSizing: 'border-box',
    },
    root: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows['2'],
      minHeight: '100%',
      height: '100%',
      boxSizing: 'border-box',
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      minHeight: '100%',
      boxSizing: 'border-box',
    },
  }),
  {
    name: 'app',
  }
)

function App() {
  const classes = useStyles()

  return (
    <Box className={classes.app}>
      <Box className={classes.root}>
        <ModelEditor id="demo-editor" classes={{ content: classes.content }} />
      </Box>
    </Box>
  )
}

export default App
