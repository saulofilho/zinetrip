import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
// import Carousel from "../components/Carousel"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
  limit = 3
}) => {

  const Posts = edges.map(edge => edge.node.frontmatter.title)

  return (
    <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        {/* <Carousel /> */}
          <div>
            <h1>index</h1>
            {Posts}
          </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
          }
        }
      }
    }
  }
`
