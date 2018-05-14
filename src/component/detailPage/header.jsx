import React, { Component } from 'react'

/**
 * 页面详情页的头部组件
 */
class Header extends Component {
  render () {
    return (
      <div className='detail-header'>
        <div className='deatail-header-left' onClick={this.props.onClickBack}>
          <i className='iconfont icon-left' />
          <span className='deatail-header-from'>{this.props.fromTitle}</span>
        </div>
        <p className='deatail-header-title'>{this.props.title}</p>
      </div>
    )
  }
}

export default Header
