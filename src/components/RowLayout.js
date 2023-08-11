import * as React from 'react'
import { rowLayout } from './RowLayout.module.scss'

export const RowLayout = ({ children }) => (
  <div className={rowLayout}>{children}</div>
)
