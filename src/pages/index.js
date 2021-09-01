import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import '../styles/index.css'
import { Group } from '../components/group.js'
import '@fontsource/cabin/500.css'
import '@fontsource/cabin/700.css'
import '@fontsource/cabin/400-italic.css'



const IndexPage = ({ data }) => {
  const content = data.content.nodes
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <main className='container'>
        {content.map(group => {
          return group.frontmatter.active ? (
            <Group data={group} key={group.id} />
          ) : null
        })}
      </main>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    content: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          active
          content {
            title
            price
            description
            type
            item {
              title
              price
              local
              description
              vegetarian
            }
            starters {
              title
              item {
                description
                title
                supplement
                vegetarian
                local
              }
            }
            main_course {
              title
              item {
                description
                supplement
                title
                local
                vegetarian
              }
            }
            desert_cheese {
              item {
                title
                supplement
                description
                local
                vegetarian
              }
              title
            }
          }
        }
      }
    }
  }
`
