import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout