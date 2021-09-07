import React, { useMemo, useState, VFC } from 'react'
import { Paper, colors, Stack } from '@mui/material'
import { Color } from '@/custom-types'
import { css } from '@emotion/css'
import { useColorPicker } from './Context'

const {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} = colors

const materialColors = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
}

type ItemProps = {
  color: Color
  onClick: (color: Color) => void
}

const Item: VFC<ItemProps> = ({ color, onClick }) => {
  const [hover, setHover] = useState(false)
  const { color: selectedColor } = useColorPicker()
  const isSelected = color === selectedColor
  return (
    <Paper
      className={css`
        transition: all 0.3s ease-in-out !important;
        background-color: ${color} !important;
        width: 24px;
        height: 24px;
        border-radius: ${isSelected
          ? '16px'
          : hover
          ? '8px'
          : 'unset'} !important;
      `}
      elevation={0}
      onClick={() => onClick(color)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    />
  )
}

export interface MaterialColorPaletteProps {
  className?: string
}

const MaterialColorPalette: VFC<MaterialColorPaletteProps> = ({
  className,
}) => {
  const { setColor } = useColorPicker()

  const content = useMemo(() => {
    return (
      <Stack spacing="1px">
        {Object.entries(materialColors).map(([name, materialColor]) => {
          return (
            <Stack key={name} direction="row" spacing="1px">
              {Object.entries(materialColor).map(([number, color]) => {
                return <Item key={number} color={color} onClick={setColor} />
              })}
            </Stack>
          )
        })}
      </Stack>
    )
  }, [setColor])

  return useMemo(() => {
    return <Paper className={className}>{content}</Paper>
  }, [className, content])
}

export default MaterialColorPalette
