import React, { Component } from 'react'
import './index.css'

import BookItem from './bookItem'
import MovieItem from './movieItem'
import MusicItem from './musicItem'

/**
 * 页面列表图书item组件
 */
class ListItem extends Component {
  render () {
    const {
            data,
            type
        } = this.props

        // 设置item 的props
    const props = {
      data,
      onClick: this.props.onClick
    }

    switch (type) {
      case 'book':
        return <BookItem {...props} />
      case 'music':
        return <MusicItem {...props} />
      case 'movie':
        return <MovieItem {...props} />
    };
  }
}

export default ListItem
