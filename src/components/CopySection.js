import * as React from 'react'
import {
  copy,
  copyBody,
  copyCaption,
  copyHeader,
  copyIcon,
  copyTitle,
  variant__detail,
  variant__hero,
  variant__section,
} from './CopySection.module.scss'

const VARIANT_STYLES = {
  detail: variant__detail,
  hero: variant__hero,
  section: variant__section,
}

export const CopySection = ({ variant, title, body, icon, caption }) => (
  <section className={`${copy} ${VARIANT_STYLES[variant] ?? ''}`}>
    <header className={copyHeader}>
      {!!icon && <div className={copyIcon}>{icon}</div>}
      {!!caption && <h2 className={copyCaption}>{caption}</h2>}
      {!!title && <h1 className={copyTitle}>{title}</h1>}
    </header>

    {!!body && <div className={copyBody}>{body}</div>}
  </section>
)
