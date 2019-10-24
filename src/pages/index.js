import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Home Page</h1>
      <h2>This is a Basic Gatsby Page</h2>
      <p>This is definitely under development and is a test site.</p>
      <p>
        Need a developer?<Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
