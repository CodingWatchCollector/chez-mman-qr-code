import React from 'react'
import { Item } from './item'

export const Menu = ({ data }) => {
  const subMenues = [
    data['starters'],
    data['main_course'],
    data['desert_cheese']
  ]

  return (
    <div className='menu category'>
      <div>
        <h2 className='menu category--title'>
          {data.title}
          <span className='menu category--price'> {data.price}</span>
        </h2>
        <p className='menu category--description'>{data.description}</p>
      </div>
      <div className='menu category--content'>
        {subMenues.map(submenu => (
          <div className='menu__submenu' key={`${data.title}-${submenu.title}`}>
            <h3 className='menu__submenu--title'>{submenu.title}</h3>
            <div className='menu__submenu--content'>
              <ul>
                {submenu.item.map(item => (
                  <li className='menu item' key={item.title}>
                    <Item data={item} />
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
