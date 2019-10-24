import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Technical Writer, Editor, Documentation Manager, APIs, Release
        Management, Developer, Testing, UX/UI, Design, Testing, if it is on the
        Web, I want to write about it and try it.{" "}
      </p>
      <p>
        Communicate <Link to="/contact">here</Link>.
      </p>
    </Layout>
  )
}

export default AboutPage
