import React from 'react'
import { Menu } from './menu'
import { AlaCarte } from './alacarte'
import IconLeaf from '../icons/icon_leaf.js'
import IconLocal from '../icons/icon_local.js'
if (typeof document !== undefined) {
  import('../components/toggle_button.js')
}

const filterContentByDataType = data => {
  if (data.type === 'menu') {
    return <Menu data={data} />
  }
  if (data.type === 'alacarte') {
    return <AlaCarte data={data} />
  }
}

export const Group = ({ data }) => {
  const { title, content } = data.frontmatter
  const contentId = data.id
  return (
    <div className='content-group'>
      <label>
        <h1 className='content-group__title'>
          {title}
          <button
            aria-label='expand the menu'
            is='toggle-button'
            data-target={contentId}
            data-sign-open='&#9667;'
            data-sign-close='&#9662;'
            data-sign-active='&#9667;'
            hidden
          ></button>
        </h1>
      </label>
      <div id={contentId} className='content-group__content'>
        <div className='label-description-wrapper'>
          <p className='label-description'>
            <IconLocal />
            <span>locale / local</span>
          </p>
          <p className='label-description'>
            <IconLeaf />
            <span>végétarien / vegetarian</span>
          </p>
        </div>
        {content.map(subgroup => {
          return (
            <div
              className={`${subgroup.type} category-wrapper`}
              key={subgroup.title}
            >
              <div className='category'>
                <div className='category--title-wrapper'>
                  <h2>
                    <span className='category--title'>{subgroup.title}</span>
                    <span className='category--price'>{subgroup.price}</span>
                  </h2>
                  <p className='category--description'>
                    {subgroup.description}
                  </p>
                </div>
                {filterContentByDataType(subgroup)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
