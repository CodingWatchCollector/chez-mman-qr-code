import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import '../styles/index.css'
import * as Tabs from '@radix-ui/react-tabs'
import getTriggers from '../components/getTriggers.js'
import { Group } from '../components/group.js'
<<<<<<< Updated upstream
import '@fontsource/cabin/500.css'
import '@fontsource/cabin/700.css'
import '@fontsource/cabin/400-italic.css'



const IndexPage = ({ data }) => {
  const content = data.content.nodes
  const { title, description } = data.site.siteMetadata
=======
import '@fontsource/tinos/700.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/300.css'
import favicon from '../images/icon.svg'
import Logo from '../images/logo.js'

const IndexPage = ({ data }) => {
  const rawContent = data.content.nodes.map(node => node.frontmatter)
  const { title, description, language } = data.site.siteMetadata
  const defaultActiveTab = 'Suggestions'
  const tabsContent = rawContent.map(group => {
    return (
      <Tabs.Content value={group.title} key={group.title}>
        <Group data={group} />
      </Tabs.Content>
    )
  })
>>>>>>> Stashed changes

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
<<<<<<< Updated upstream
      <main className='container'>
        {content.map(group => {
          return group.frontmatter.active ? (
            <Group data={group} key={group.id} />
          ) : null
        })}
=======
      <h1 className='logo' aria-label={`Chez M'man`}>
        <Logo />
      </h1>
      <main>
        <Tabs.Root
          defaultValue={defaultActiveTab}
          activationMode='manual'
          className='container flow-spacer'
        >
          <nav className='nav-main' aria-label='main'>
            <Tabs.List>{getTriggers('title', rawContent)}</Tabs.List>
          </nav>
          <div className='frame'>
            <div className='main-content'>{tabsContent}</div>
          </div>
        </Tabs.Root>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        id
=======
>>>>>>> Stashed changes
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
