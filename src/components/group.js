import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import getTriggers from './getTriggers.js'
import { Menu } from './menu.js'
import { AlaCarte } from './alacarte.js'

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

export const Group = ({ data }) => {
  // hide navigation if only 1 item
  let hideNav = false
  if (data.content.length === 1) {
    hideNav = true
  }

  let defaultActiveTab = ''
  const tabsContent = data.content.map(node => {
    if (!defaultActiveTab) {
      defaultActiveTab = node.title
    }
    return (
      <Tabs.Content value={node.title} key={node.title}>
        {filterContentByDataType(node)}
      </Tabs.Content>
    )
  })

  return (
    <Tabs.Root
      defaultValue={defaultActiveTab}
      className='group'
      activationMode='manual'
    >
      <nav className={hideNav ? 'hidden' : ''}>
        <Tabs.List className='group-nav'>
          {getTriggers('title', data.content)}
        </Tabs.List>
      </nav>
      <div className='group-content'>{tabsContent}</div>
    </Tabs.Root>
  )
}
