import React, { Component } from 'react'
import './index.css'

import ListItem from '../listItem'

/**
* 页面列表组件
*/
class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: props.type || 'book'
    }
    this.onClick = this.onClick.bind(this)
  }

  // 点击列表item的时候，触发父组件
  onClick (type, data) {
    this.props.onClickDetail({
      type,
      data
    })
  }

  render () {
    const { data, type } = this.props
    const className = `list list-` + type
    return (
      <ul className={className}>
        {
          data.map(item => {
            return (
              <ListItem
                type={type}
                key={item.id}
                data={item}
                onClick={() => { this.onClick(type, item) }}
              />
            )
          })
        }
      </ul>
    )
  }
}
export default List
