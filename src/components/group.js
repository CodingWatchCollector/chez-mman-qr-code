import React, { useMemo } from 'react'
import { Menu } from './menu.js'
import { AlaCarte } from './alacarte.js'
import BookOpen from '../icons/book_open.js'
import BookClosed from '../icons/book_closed.js'

if (typeof document !== undefined) {
  import('../components/toggle_button.js')
}

const filterContentByDataType = data => {
  if (data.type === 'menu') {
    return (
      <div>
        <Menu data={data} />
      </div>
    )
  }
  if (data.type === 'alacarte') {
    return <AlaCarte data={data} />
  }
}

export const Group = ({ data, expandContent, expanded }) => {
  const { title, content } = data.frontmatter
  const htmlContent = useMemo(() => {
    return content.map(subgroup => {
      return (
        <div
          className={`${subgroup.type} category-wrapper flow-content flow-content--large`}
          key={subgroup.title}
        >
          <div className='category flow-content'>
            <div className='category--title-wrapper'>
              <h2>
                <span className='category--title'>{subgroup.title}</span>
                {subgroup.price ? (
                  <span className='category--price'>{subgroup.price}</span>
                ) : null}
              </h2>
              <p className='category--description'>{subgroup.description}</p>
            </div>
            <div>{filterContentByDataType(subgroup)}</div>
          </div>
        </div>
      )
    })
  }, [content])
  return (
    <div
      className={'content-group ' + (expanded ? 'content-group--active' : null)}
    >
      <label>
        <h1 className='content-group__title'>
          <button
            aria-expanded='false'
            data-group='nav'
            onClick={e => {
              expandContent(htmlContent, data.id)
              e.target.setAttribute('aria-expanded', 'true')
            }}
          ></button>
          <span>
            {expanded ? <BookOpen /> : <BookClosed />}
            {title}
          </span>
        </h1>
      </label>
    </div>
  )
}
