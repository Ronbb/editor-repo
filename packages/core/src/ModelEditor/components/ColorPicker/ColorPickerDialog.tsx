import React, { FC, useCallback, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { Color } from '@/custom-types'
import ColorPicker from './ColorPicker'
import { useImmutableCallback } from '@/utils/hooks/useImmutableCallback'
import { noop } from '@/utils/noop'
import { grey } from '@mui/material/colors'

export interface ColorPickerDialogProps {
  className?: string
  open: boolean
  defaultColor?: Color
  color?: Color
  onChange?: (color: Color) => void
  onClose?: (color: Color) => void
}

const ColorPickerDialog: FC<ColorPickerDialogProps> = ({
  className,
  open,
  defaultColor = grey[500],
  color,
  onChange,
  onClose,
}) => {
  const [storedColor, setStoredColor] = useState<Color>(color ?? defaultColor)
  const immutableOnChange = useImmutableCallback(onChange ?? noop)
  const immutableOnClose = useImmutableCallback(onClose ?? noop)

  const handleChange = useCallback((color: Color) => {
    setStoredColor(color)
    immutableOnChange(color)
  }, [])

  const handleClose = useCallback(() => {
    immutableOnClose(storedColor)
  }, [storedColor])

  return (
    <Dialog
      disablePortal
      className={className}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Color</DialogTitle>
      <DialogContent>
        <ColorPicker
          defaultColor={defaultColor}
          color={color}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Finish</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ColorPickerDialog
