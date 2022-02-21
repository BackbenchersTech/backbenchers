import * as React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />

      <main>
        <div className="global-contain">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
