import * as React from 'react'
// import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import '../styles/index.css'

const Menu = ({ data }) => {
  const subMenus = [
    data['starters'],
    data['main_course'],
    data['desert_cheese']
  ]
  return (
    <div className='menu category--container'>
      <div>
        <h1>
          <span className='menu category--title'>{data.title}</span>
          <span className='menu category--price'> {data.price}</span>
        </h1>
        <p className='menu category--description'>{data.description}</p>
      </div>
      <div className='menu category--content'>
        {subMenus.map(submenu => (
          <div className='menu--submenu' key={`${data.title}-${submenu.title}`}>
            <h2 className='menu submenu--title'>{submenu.title}</h2>
            <div className='menu submenu--content'>
              <ul>
                {submenu.item.map(item => (
                  <li className='menu item' key={item.title}>
                    <span className='menu item--title'>{item.title}</span>
                    <span className='menu item--supplement'>
                      {item.supplement}
                    </span>
                    <span className='menu item--description'>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AlaCarte = ({ data }) => {
  const itemsList = data.item
  return (
    <div className='alacarte category--container'>
      <div>
        <h1 className='alacarte category--title'>{data.title}</h1>
        <p className='alacarte category--description'>{data.description}</p>
      </div>
      <div className='alacarte category--content'>
        <ul>
          {itemsList.map(item => (
            <li className='alacarte item' key={item.title}>
              <span className='alacarte item--title'>{item.title}</span>
              <span className='alacarte item--description'>
                {item.description}
              </span>
              <span className='alacarte item--price'>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// markup
const IndexPage = ({ data }) => {
  const { title, content } = data.allMarkdownRemark.nodes[0].frontmatter
  // const [dishOfTheDay, setDishOfTheDay] = useState(null)
  // useEffect(() => {
  //   setTimeout(function () {
  //     fetch(
  //       'https://raw.githubusercontent.com/CodingWatchCollector/chez-mman/main/plat-du-jour.json'
  //     )
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(data => {
  //         setDishOfTheDay(data.plat || null)
  //       })
  //   }, 1000)
  //   return () => {
  //     clearTimeout()
  //   }
  // }, [])
  // const menu = data.allMarkdownRemark.nodes[0].frontmatter.content.filter(content => content.type === 'menu')

  return (
    <div>
      <h1>{title}</h1>
      {/* <p>{dishOfTheDay}</p> */}
      <div>
        {content.map(subgroup => {
          if (subgroup.type === 'menu') {
            return <Menu data={subgroup} key={subgroup.title} />
          }
          if (subgroup.type === 'alacarte') {
            return <AlaCarte data={subgroup} key={subgroup.title} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query Menu {
    allMarkdownRemark {
      nodes {
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
            }
            starters {
              title
              item {
                description
                title
              }
            }
            main_course {
              title
              item {
                description
                supplement
                title
              }
            }
            desert_cheese {
              item {
                title
                description
              }
              title
            }
          }
        }
      }
    }
  }
`
