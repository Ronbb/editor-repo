import { ElementType } from '@/custom-types'

const listElementTypes = new Set<ElementType>()

export const isListElementType = (type: ElementType) =>
  listElementTypes.has(type)
