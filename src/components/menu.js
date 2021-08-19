import React from 'react'
import { Item } from './item'

const addLocalClass = local => {
  if (local) {
    return 'local'
  }
  return ''
}

const addVegetarianClass = vegetarian => {
  if (vegetarian) {
    return 'vegetarian'
  }
  return ''
}

export const Menu = ({ data }) => {
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
                  <li
                    className={`menu item ${addLocalClass(
                      item.local
                    )} ${addVegetarianClass(item.vegetarian)}`}
                    key={item.title}
                  >
                    <Item data={item} />
                    {/* <span className='menu item--title'>{item.title}</span>
                    <span className='menu item--supplement'>
                      {item.supplement}
                    </span>
                    <span className='menu item--description'>
                      {item.description}
                    </span> */}
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
