import * as React from 'react'
import {
  layout,
  layoutContainer,
  noMargin,
  noPadding,
  sectionContainer,
} from './SectionContainer.module.scss'

export const SectionContainer = ({
  className,
  children,
  noPadding: noPaddingAttr,
  noMargin: noMarginAttr,
}) => (
  <div
    className={`${className ?? ''} ${sectionContainer} ${
      (noPaddingAttr ?? '') && noPadding
    } ${(noMarginAttr ?? '') && noMargin}`}
  >
    <div className={layoutContainer}>
      <div className={layout}>{children}</div>
    </div>
  </div>
)
