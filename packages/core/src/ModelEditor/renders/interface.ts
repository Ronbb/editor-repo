import { ElementType, ExplicitElement } from '@/custom-types'
import { FC } from 'react'
import {
  RenderElementProps,
  RenderLeafProps,
  RenderPlaceholderProps,
} from 'slate-react'

type NullableElementType = ElementType | null

export type ElementRenderer<T extends NullableElementType = null> = (
  props: T extends ElementType
    ? Omit<RenderElementProps, 'element'> & {
        element: ExplicitElement<T>
      }
    : RenderElementProps
) => JSX.Element

export type LeafRenderer = (props: RenderLeafProps) => JSX.Element

export type LeafContentRenderer = (
  props: Omit<RenderLeafProps, 'attributes'>
) => JSX.Element

export type PlaceholderRenderer = (props: RenderPlaceholderProps) => JSX.Element

export type PropertiesRenderer<T extends ElementType> = FC<{
  element: ExplicitElement<T>
}>
