import React, { Component } from 'react'

/**
 * 页面列表图书item组件
 */
class BookItem extends Component {
  render () {
    const {
            data,
            onClick
        } = this.props
        // 只选择前三个tag
    var tags = data.tags || []
    tags = tags.slice(0, 3)

    return (
      <li className='list-item' onClick={onClick}>
        <img src={data.image} />
        <div className='list-item-content'>
          <p className='list-item-info'>
            <span className='title'>名称：</span>
            <span className='title'>{data.title}</span>
          </p>
          <p className='list-item-info'>
            {
                                tags.map((item, index) => {
                                  return <span key={item.title} className='tag'>{item.name}</span>
                                })
                            }
          </p>
          <p className='list-item-info'>
            <span className='title'>作者：</span>
            <span className='title'>{data.author}</span>
          </p>
          <p className='list-item-info'>
            <span className='title'>评分：</span>
            <span className='title'>{data.rating.average}</span>
          </p>
          <p className='list-item-info'>
            <span className='title'>时间：</span>
            <span className='title'>{data.pubdate}</span>
          </p>

        </div>
      </li>
    )
  }
}

export default BookItem
