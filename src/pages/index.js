import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Home Page</h1>
      <h2>Welcome to Gatsby!</h2>
      <p>
        This is a small Gatsby Starter Site with content sourced from the
        Contentful CMS.
      </p>
    </Layout>
  )
}

export default IndexPage
