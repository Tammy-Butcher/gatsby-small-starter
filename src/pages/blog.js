import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

// --- Data sourced from markdown posts in the posts directory ---

// const BlogPage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <h1>Blog</h1>
//       <ol className={blogStyles.posts}>
//         {data.allMarkdownRemark.edges.map(edge => {
//           return (
//             <li className={blogStyles.post}>
//               <Link to={`/blog/${edge.node.fields.slug}`}>
//                 <h2>{edge.node.frontmatter.title}</h2>
//               </Link>
//               <p>{edge.node.frontmatter.date}</p>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }
