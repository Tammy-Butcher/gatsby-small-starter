import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        Contact me at:{" "}
        <a href="mailto:butcher.tammy@gmail.com" target="_blank">
          butcher.tammy@gmail.com
        </a>
      </p>
      <p>
        I'm also on <a href="http://www.twitter.com">Twitter</a>
      </p>
    </Layout>
  )
}

export default ContactPage
