import { Link } from 'gatsby'
import * as React from 'react'
import {
  copyright,
  footerContainer,
  label,
  layoutContainer,
  list,
  listItem,
  logo,
  primaryFooter,
} from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={footerContainer}>
        <div className={layoutContainer}>
          <div className={primaryFooter}>
            <div>
              <h3>
                <Link className={logo} to="/">
                  backbenchers
                </Link>
              </h3>
            </div>

            <div>
              <div className={label}>Practice areas</div>
              <ul className={list}>
                <li className={listItem}>
                  <Link to="/salesforce">Salesforce</Link>
                </li>

                <li className={listItem}>
                  <Link to="/mulesoft">Mulesoft</Link>
                </li>

                <li className={listItem}>
                  <Link to="/snowflake">Snowflake</Link>
                </li>
              </ul>
            </div>

            <div>
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

          <div className={copyright}>
            &copy;2023 Backbenchers, LLC | All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
