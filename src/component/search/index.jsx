import React, { Component } from 'react'
import './index.css'

/**
 * 页面头部搜索组件
 */
class Search extends Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick (index, item) {
    this.props.onSearch && this.props.onSearch(this.input.value)
  }

  render () {
    const index = this.props.index
    const placeholderMaps = [
      '书名、作者、ISBN',
      '电影、影人、影院、电视剧',
      '唱片名、表演者、条码、ISRC'
    ]
    return (
      <div className='search'>
        <i className='iconfont icon-search' />
        <input
          className='search-input'
          placeholder={placeholderMaps[index]}
          ref={input => (this.input = input)}
        />
        <button className='search-btn' onClick={this.onClick}>搜索</button>
      </div>
    )
  }
}
export default Search
