import React from 'react'
import { Item } from './item.js'

export const AlaCarte = ({ data }) => {
  const itemsList = data.item || []
  return (
<<<<<<< Updated upstream
    <div className='category--content'>
      <ul>
        {itemsList.map(item => (
          <li className=' item' key={item.title}>
            <Item data={item} />
          </li>
        ))}
      </ul>
    </div>
=======
    <>
      <div className='subgroup flow-spacer'>
        <div className='subgroup-head'>
          <div className='subgroup-title-wrapper'>
            <h2 className='subgroup-title'>{data.title}</h2>
            <div className='subgroup-price'>{data.price}</div>
          </div>
          <p className='subgroup-title-description'>{data.description}</p>
        </div>
        <div className='subgroup-content'>
          <ul className='items-list'>
            {itemsList.map(item => (
              <li className='item' key={item.title}>
                <Item data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
>>>>>>> Stashed changes
  )
}
