import React, { useMemo, useEffect } from 'react'
import { Menu } from './menu.js'
import { AlaCarte } from './alacarte.js'
import BookOpen from '../icons/book_open.js'
import BookClosed from '../icons/book_closed.js'

const filterContentByDataType = data => {
  if (data.type === 'menu') {
    return (
      <div>
        <Menu data={data} />
      </div>
    )
  }
  if (data.type === 'alacarte' || data.type === 'lunch') {
    return <AlaCarte data={data} />
  }
}

export const Group = ({ data, expandContent, expanded, categoryByDefault }) => {
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

  // activate default category once after first render
  useEffect(() => {
    if (categoryByDefault === title) {
      expandContent(htmlContent, data.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleButton = (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      aria-expanded={'' + expanded}
      data-group='nav'
      onClick={e => {
        expandContent(htmlContent, data.id)
        e.target.setAttribute('aria-expanded', 'true')
      }}
    ></button>
  )

  return (
    <div
      className={'content-group ' + (expanded ? 'content-group--active' : '')}
    >
      <label>
        <h1 className='content-group__title'>
          {toggleButton}
          <span>
            {expanded ? <BookOpen /> : <BookClosed />}
            {title}
          </span>
        </h1>
      </label>
    </div>
  )
}
