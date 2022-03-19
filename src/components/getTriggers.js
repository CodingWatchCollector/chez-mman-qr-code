import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'

export default function getTriggers (valueProp, nodes, classList = '') {
  return nodes.map(node => (
    <Tabs.Trigger
      key={node[valueProp]}
      value={node[valueProp]}
      className={classList}
    >
      <span>{node[valueProp]}</span>
    </Tabs.Trigger>
  ))
}
