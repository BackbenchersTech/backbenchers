import { Link } from 'gatsby'
import * as React from 'react'
import {
  columnWrap,
  copyright,
  label,
  list,
  listItem,
  logoWrap,
  primaryFooter,
} from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className="global-contain">
        <div className={primaryFooter}>
          <div className={logoWrap}>
            <h3>
              <Link className="global-logo" to="/">
                backbenchers
              </Link>
            </h3>
          </div>

          <div className={columnWrap}>
            <div className={label}>Company</div>
            <ul className={list}>
              <li className={listItem}>
                <a
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                  href="https://www.linkedin.com/company/backbenchers-llc"
                >
                  Find us on Linkedin
                </a>
              </li>

              <li className={listItem}>
                <a href="mailto:info@gobackbenchers.com">Email Us</a>
              </li>

              <li className={listItem}>
                <a href="tel:+14849990026">+1 (484) 999-0026</a>
              </li>

              {/* <li className={listItem}>
                <ul className={socialList}>
                  <li>
                    <a href=''><StaticImage src='../images/linkedin.svg' alt='Linkedin' height={16} /></a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>

        <hr />

        <div className={copyright}>&copy; Backbenchers LLC</div>
      </div>
    </footer>
  )
}

export default Footer
