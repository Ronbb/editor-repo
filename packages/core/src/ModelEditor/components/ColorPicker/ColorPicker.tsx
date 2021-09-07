import React, { useMemo, useState, VFC } from 'react'
import { Paper, Stack, TextField } from '@mui/material'
import { css } from '@emotion/css'
import { Color } from '@/custom-types'
import { ColorPickerProvider } from './Context'
import MaterialColorPalette from './MaterialColorPalette'
import { useImmutableCallback } from '@/utils/hooks/useImmutableCallback'
import { noop } from '@/utils/noop'
import useUpdateEffect from '@/utils/hooks/useUpdate'

export interface ColorPickerProps {
  className?: string
  defaultColor: Color
  color?: Color
  onChange?: (color: Color) => void
}

const ColorPicker: VFC<ColorPickerProps> = ({
  className,
  onChange,
  color,
  defaultColor,
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>(
    color ?? defaultColor
  )
  const immutableOnChange = useImmutableCallback(onChange ?? noop)

  useUpdateEffect(() => {
    immutableOnChange(selectedColor)
  }, [selectedColor])

  useUpdateEffect(() => {
    if (color) {
      setSelectedColor(color)
    }
  }, [color])

  return useMemo(() => {
    return (
      <ColorPickerProvider
        value={{ color: selectedColor, setColor: setSelectedColor }}
      >
        <Stack direction="column" className={className} spacing={2}>
          <MaterialColorPalette />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Paper
              className={css`
                transition: all 0.3s ease-in-out;
                background-color: ${selectedColor};
                border-radius: 50%;
                height: 36px;
                width: 36px;
              `}
              elevation={4}
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              variant="standard"
              label="Color"
              value={selectedColor}
              size="small"
              onChange={(event) => setSelectedColor(event.target.value)}
            />
          </Stack>
        </Stack>
      </ColorPickerProvider>
    )
  }, [className, selectedColor])
}

export default ColorPicker
