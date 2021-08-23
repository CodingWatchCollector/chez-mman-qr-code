import * as React from 'react'
// import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import '../styles/index.css'
import { Group } from '../components/group'

// markup
const IndexPage = ({ data }) => {
  const content = data.allMarkdownRemark.nodes

  return (
    <main>
      {content.map(group => {
        return <Group data={group} key={group.id} />
      })}
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query Menu {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
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
