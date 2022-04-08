import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import '../styles/index.css'
import * as Tabs from '@radix-ui/react-tabs'
import getTriggers from '../components/getTriggers.js'
import { Group } from '../components/group.js'
import '@fontsource/tinos/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/300.css'
import Logo from '../images/logo.js'

const IndexPage = ({ data }) => {
  const rawContent = data.content.nodes.map(node => node.frontmatter)
  const { title, description, language } = data.site.siteMetadata
  const defaultActiveTab = 'Suggestions'
  const tabsContent = rawContent.map(group => {
    return (
      <Tabs.Content value={group.title} key={group.title} lang={group.language}>
        <Group data={group} />
      </Tabs.Content>
    )
  })

  return (
    <>
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <h1 className='logo-wrapper' aria-label={`Chez M'man`}>
        <Logo />
      </h1>
      <main className='frame'>
        <Tabs.Root defaultValue={defaultActiveTab} activationMode='manual'>
          <nav aria-label='main'>
            <Tabs.List className='nav-main'>
              {getTriggers('title', rawContent)}
            </Tabs.List>
          </nav>
          <div className='main-content'>{tabsContent}</div>
        </Tabs.Root>
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
        language
      }
    }
    content: allMarkdownRemark(
      filter: { frontmatter: { active: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
          active
          language
          content {
            title
            price
            description
            type
            item {
              updated
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
                price
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
                price
                local
                vegetarian
              }
            }
            desert_cheese {
              item {
                title
                supplement
                price
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
