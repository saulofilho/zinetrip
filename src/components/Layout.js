import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
      query IndexLayoutQuery {
        settingsYaml {
          siteTitle
          siteDescription
          socialMediaCard {
            image
          }
        }
      }
    `}
      render={data => {
        const { siteTitle, socialMediaCard } = data.settingsYaml

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
            </Helmet>

            <Meta
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />
            <div>
              {children}
            </div>
          </Fragment>
        )
      }}
    />
  )
}
