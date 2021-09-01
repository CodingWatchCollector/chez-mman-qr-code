import React from 'react'
import { Item } from './item.js'

export const AlaCarte = ({ data }) => {
  const itemsList = data.item || []

  return (
    <div className='category--content'>
      <ul>
        {itemsList.map(item => (
          <li className=' item' key={item.title}>
            <Item data={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
