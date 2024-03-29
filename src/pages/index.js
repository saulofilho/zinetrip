import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"
import Instagram from "../components/Instagram"
import { Rnd } from "react-rnd";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  }
}) => {
  const posts = edges.map(edge => edge.node.frontmatter)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Carousel />
      {posts.map(item =>
        (item.img !== null ?
        <Rnd
          key={item.img}
          default={{
            x: item.x,
            y: item.y,
            width: 200,
            height: 200,
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="react-draggable-item">
            <img src={item.img} alt="imgs draggable" />
          </div>
        </Rnd> : null)
      )}
      <div className="vimeo">
        <iframe
          title="zinetrip"
          src="https://player.vimeo.com/video/397870522?title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          width="100%"
          height="600px"
        ></iframe>
      </div>
      <Instagram />
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
            x
            y
          }
        }
      }
    }
  }
`
