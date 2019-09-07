<<<<<<< HEAD
import React from "react"
import Helmet from "react-helmet"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import config from "../../data/SiteConfig"
import styles from "../styles/styles.module.scss"

const Layout = props => {
  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Header />
      <div className={styles.body} id="content">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
=======
import React from "react"
import Helmet from "react-helmet"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import config from "../../data/SiteConfig"
import styles from "../styles/styles.module.scss"

const Layout = props => {
  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Header />
      <div className={styles.body} id="content">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
>>>>>>> 30df615767adaef0d9586833df76ac3a9cd25511
