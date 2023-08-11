import * as React from 'react'
import { section, backgroundMask, background } from './Section.module.scss'

export const Section = ({ children, bgImage, theme }) => (
  <section className={`${section} theme-${theme ?? 'light'}`}>
    <div className="section-masked">
      <div className={backgroundMask}>
        <div className={background}>{bgImage}</div>
      </div>

      {children}
    </div>
  </section>
)
