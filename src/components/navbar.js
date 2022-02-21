import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { headerWrapper, inner } from './navbar.module.scss'

const Navbar = () => {
  return (
    <header>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          content="Backbenchers offers tailored services to build modern business applications."
          name="description"
        />
        <title>backbenchers | Home</title>
        <link rel="canonical" href="https://gobackbenchers.com" />
      </Helmet>
      <div className={headerWrapper}>
        <div className={inner}>
          <h1>
            <Link className="global-logo" to="/">
              backbenchers
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Navbar
