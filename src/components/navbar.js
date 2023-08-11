import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import {
  header,
  headerContainer,
  layoutContainer,
  logo,
  navbar,
} from './navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>

      <header className={navbar}>
        <div className={headerContainer}>
          <div className={layoutContainer}>
            <div className={header}>
              <h1>
                <Link className={logo} to="/">
                  backbenchers
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
