import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import 'prismjs/themes/prism-okaidia.css'

export default ({ children, meta }) => {
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
