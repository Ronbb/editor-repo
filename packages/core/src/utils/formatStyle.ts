import { NumberWithUnit } from '@/custom-types'

export const formatStyle = (value?: NumberWithUnit) => {
  if (value) {
    return `${value.number}${value.unit}`
  }
}
