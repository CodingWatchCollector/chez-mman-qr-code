import React from 'react'
import { Item } from './item'

export const AlaCarte = ({ data }) => {
  const itemsList = data.item
  return (
    <div className='alacarte category'>
      <div className='alacarte category--title-wrapper'>
        <h2 className='alacarte category--title'>{data.title}</h2>
        <p className='alacarte category--description'>{data.description}</p>
      </div>
      <div className='alacarte category--content'>
        <ul>
          {itemsList.map(item => (
            <li className='alacarte item' key={item.title}>
              <Item data={item} />
              {/* <span className='alacarte item--title'>{item.title}</span>
              <span className='alacarte item--description'>
                {item.description}
              </span>
              <span className='alacarte item--price'>{item.price}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
