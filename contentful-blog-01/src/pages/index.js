import * as React from "react"
import {graphql } from "gatsby"
import Common from '../components/common.js'
import * as styles from '../styles/home.module.css'
import Link from '../components/Link.js'

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
const yourstyle = {
  color: "red",
  textDecoration: "none",
  backgroundColor:"blue"
}
export default function Home({data}){
  const person = data.allContentfulPerson.nodes
  return(
   <Common>
    <section className={styles.spacing}>
    <h1>{person[0].name}</h1>
    <Link style = {yourstyle} labels = {data.allContentfulLink.nodes[0].label} urls = {data.allContentfulLink.nodes[0].url}/>
    </section>
   </Common>
  )
}
// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes
//   const person = data.allContentfulPerson.nodes


//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Bio />
//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => {
//           const title = post.frontmatter.title || post.fields.slug

//           return (
//             <li key={post.fields.slug}>
//               <article
//                 className="post-list-item"
//                 itemScope
//                 itemType="http://schema.org/Article"
//               >
//                 <header>
//                   <h2>
//                     <Link to={post.fields.slug} itemProp="url">
//                       <span itemProp="headline">{title}</span>
//                     </Link>
//                   </h2>
//                   <small>{post.frontmatter.date}</small>
//                 </header>
//                 <section>
//                   <p
//                     dangerouslySetInnerHTML={{
//                       __html: post.frontmatter.description || post.excerpt,
//                     }}
//                     itemProp="description"
//                   />
//                 </section>
//               </article>
//             </li>
//           )
//         })}
//       </ol>
//       <div>
//         <h1>{person[0].name}</h1>
//       </div>
//     </Layout>
//   )
// }

// export default BlogIndex

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    allContentfulPerson {
      nodes {
        name
      }
    }
    allContentfulLink(limit:10){
      nodes {
        label
        url
        targetLink
      }
    }
  }
`
