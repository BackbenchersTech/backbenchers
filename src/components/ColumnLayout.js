import * as React from 'react'
import { columnLayout } from './ColumnLayout.module.scss'

export const ColumnLayout = ({ className, children, ...props }) => (
  <div className={`${columnLayout} ${className}`} {...props}>
    {children}
  </div>
)
