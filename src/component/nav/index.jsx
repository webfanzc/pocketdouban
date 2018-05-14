import React, { Component } from 'react'
import './index.css'

/**
 * 页面底部导航组件
 */
class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      curIndex: 0,
      navs: [{
        icon: 'book',
        title: '图书'
      }, {
        icon: 'movie',
        title: '电影'
      }, {
        icon: 'music',
        title: '音乐'
      }]
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick (index, item) {
    console.log('click', index)
    this.setState({
      curIndex: index
    })
    this.props.onChangeNav && this.props.onChangeNav(index)
  }
  render () {
    const {
      navs,
      curIndex
    } = this.state
    const self = this
    return (
      <ul className='nav'>
        {
          navs.map(function (item, index) {
            // 设置类名
            const extClass = index === curIndex ? 'nav-item-selected' : ''
            const className = `nav-item ${extClass}`
            const iconClassName = `nav-item-icon iconfont icon-${item.icon}`

            return (
              <li key={index} className={className} onClick={() => {
                self.onClick(index)
              }}>
                <i className={iconClassName} />
                <p className='nav-item-title'>{item.title}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default Nav
