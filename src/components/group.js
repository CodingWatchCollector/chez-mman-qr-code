import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import getTriggers from './getTriggers.js'
import { Menu } from './menu.js'
import { AlaCarte } from './alacarte.js'

const filterContentByDataType = data => {
  if (data.type === 'menu') {
    return <Menu data={data} />
  }
  if (data.type === 'alacarte') {
    return <AlaCarte data={data} />
  }
}

export const Group = ({ data }) => {
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
      className='group flow-spacer'
      activationMode='manual'
    >
      <nav className='group-nav'>
        <Tabs.List>{getTriggers('title', data.content)}</Tabs.List>
      </nav>
      <div className='group-content'>{tabsContent}</div>
    </Tabs.Root>
  )
}
