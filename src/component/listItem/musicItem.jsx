import React, { Component } from 'react'

/**
 * 页面列表音乐item组件
 */
class MusicItem extends Component {
  render () {
    const {
      data,
      onClick
    } = this.props

    return (
      <li className='list-item' onClick={onClick}>
        <img src={data.image} />
        <div className='list-item-content'>
          <p className='list-item-info'>
            <span className='title'>名称：</span>
            <span className='title'>{data.title}</span>
          </p>
          <p className='list-item-info'>
            <span className='title'>作者：</span>
            <span className='title'>{data.author && data.author[0].name}</span>
          </p>
          <p className='list-item-info'>
            <span className='title'>评分：</span>
            <span className='title'>{data.rating.average}</span>
          </p>
          <p className='list-item-desc'>{data.summary}</p>
        </div>
      </li>
    )
  }
}

export default MusicItem
