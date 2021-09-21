import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import '../styles/index.css'
import { Group } from '../components/group.js'
import IconLeaf from '../icons/icon_leaf.js'
import IconLocal from '../icons/icon_local.js'
import collapseAllButtonsFromSet from '../components/collapse_buttons.js'
import '@fontsource/cabin/500.css'
import '@fontsource/cabin/700.css'
import '@fontsource/cabin/400-italic.css'
import favicon from '../images/icon.svg'

const labelDescription = (
  <div className='content--expanded__labels flow-content'>
    <p className='label-description'>
      <IconLocal />
      <span>locale / local</span>
    </p>
    <p className='label-description'>
      <IconLeaf />
      <span>végétarien / vegetarian</span>
    </p>
  </div>
)

const IndexPage = ({ data }) => {
  const content = data.content.nodes
  const { title, description, language } = data.site.siteMetadata
  const [expandedContent, setExpandedContent] = useState(null)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const handleActiveCategoryChange = (categoryContent, categoryId) => {
    setExpandedCategory(categoryId)
    setExpandedContent(categoryContent)
    collapseAllButtonsFromSet('nav')
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: language }}>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' type='image/svg+xml' href={favicon} />
      </Helmet>
      <main className='container flow-content flow-content--large'>
        <div className='main--nav flow-content'>
          {content.map(group => {
            const active = expandedCategory === group.id
            return (
              <Group
                data={group}
                key={group.id}
                expandContent={handleActiveCategoryChange}
                expanded={active}
              />
            )
          })}
        </div>
        <div className='main--expanded flow-content flow-content--large'>
          {expandedContent ? labelDescription : ''}
          {expandedContent}
        </div>
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
