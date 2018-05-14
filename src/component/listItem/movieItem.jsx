import React, { Component } from 'react'

/**
 * 页面列表电影item组件
 */
class MovieItem extends Component {
  render () {
    const {
      data,
      onClick
    } = this.props

    // 只选择前三个genres
    var genres = data.genres || []
    genres = genres.slice(0, 3)

    return (
      <li className='list-item' onClick={onClick}>
        <img src={data.images.small} />
        <div className='list-item-content'>
          <p className='list-item-info list-item-title'>
            {data.title} - {data.year}
          </p>

          <p className='list-item-info'>
            {
              genres.map((item, index) => {
                return <span key={item} className='tag'>{item}</span>
              })
            }
          </p>
          <p className='list-item-info'>
            {
              data.casts.map((item, index) => {
                return <span key={item.name} className='actor'>{item.name}</span>
              })
            }
          </p>
          <p className='list-item-info'>
            <span className='title'>评分：</span>
            <span className='title'>{data.rating.average}</span>
          </p>
        </div>
      </li>
    )
  }
}

export default MovieItem
