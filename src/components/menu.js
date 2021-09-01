import React from 'react'
import { Item } from './item.js'

export const Menu = ({ data }) => {
  const subMenues = [
    data['starters'],
    data['main_course'],
    data['desert_cheese']
  ]

  return (
    <div className='category--content'>
      {subMenues.map(submenu => (
        <div className='menu__submenu' key={`${data.title}-${submenu.title}`}>
          <h3 className='menu__submenu--title'>{submenu.title}</h3>
          <div className='menu__submenu--content'>
            <ul>
              {submenu.item.map(item => (
                <li className='item' key={item.title}>
                  <Item data={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
