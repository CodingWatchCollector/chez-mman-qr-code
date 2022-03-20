import React from 'react'
import { Item } from './item.js'

export const Menu = ({ data }) => {
  const subMenues = [
    data['starters'],
    data['main_course'],
    data['desert_cheese']
  ]

  return (
    <div className='subgroup flow-spacer'>
      <div className='subgroup-head'>
        <div className='subgroup-title-wrapper'>
          <h2 className='subgroup-title'>{data.title}</h2>
          <div className='subgroup-price'>{data.price}</div>
        </div>
        <p className='subgroup-title-description'>{data.description}</p>
      </div>
      <div className='subgroup-content flow-spacer'>
        {subMenues.map(submenu => (
          <div
            className='submenu flow-spacer spacer-xs'
            key={`${data.title}-${submenu.title}`}
          >
            <h3 className='submenu-title'>{submenu.title}</h3>
            <div className='submenu-content'>
              <ul className='items-list'>
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
    </div>
  )
}
