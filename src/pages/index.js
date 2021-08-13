import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import loadable from '@loadable/component'

const Draggable = loadable(() => import('react-draggable'))

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}) => {
  const Posts = edges.map(edge => edge.node.frontmatter.img)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Carousel />
      {Posts.map(item =>
        <Draggable>
          <div className="react-draggable-item">
            <img src={item} alt="imgs draggable" />
          </div>
        </Draggable>
      )}
      <div className="vimeo">
        <iframe
          src="https://player.vimeo.com/video/397870522?title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen width="100%"
          height="600px"
        ></iframe>
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
            img
          }
        }
      }
    }
  }
`
