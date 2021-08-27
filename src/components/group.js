import React from 'react'
import { Menu } from './menu'
import { AlaCarte } from './alacarte'
if (typeof document !== undefined) {
  import('../components/toggle_button.js')
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
      <div id={contentId} className='content-group--content'>
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
