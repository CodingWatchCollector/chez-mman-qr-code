import React from 'react'
import { Item } from './item.js'

export const AlaCarte = ({ data }) => {
  const itemsList = data.item || []
  return (
    <>
      <div className='subgroup alacarte separator-700'>
        <div className='subgroup-head flow-spacer separator-700'>
          <div
            className={
              'subgroup-title-wrapper ' +
              (data.price ? ' price-separator-700' : '')
            }
          >
            <h2 className='subgroup-title'>{data.title}</h2>
            {data.price ? (
              <div className='subgroup-price'>{data.price}</div>
            ) : null}
          </div>
          <p className='subgroup-title-description'>{data.description}</p>
        </div>
        <div className='subgroup-content'>
          <ul className='items-list'>
            {itemsList.map(item => (
              <li className='item separator-400' key={item.title}>
                <Item data={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
