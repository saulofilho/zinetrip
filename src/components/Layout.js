import React from "react"
import Header from './Header'
import FooterWrapper from './Footer'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FooterWrapper />
    </div>
  )
}
