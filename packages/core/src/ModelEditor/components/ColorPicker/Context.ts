import { Color } from '@/custom-types'
import { createContext, useContext } from 'react'

type ColorPickerContextValue = {
  color: Color
  setColor: (color: Color) => void
}

const ColorPickerContext = createContext<ColorPickerContextValue>(null as any)

export const ColorPickerProvider = ColorPickerContext.Provider

export const useColorPicker = () => {
  return useContext(ColorPickerContext)
}
