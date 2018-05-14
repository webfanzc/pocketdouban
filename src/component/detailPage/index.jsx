import React, { Component } from 'react'

import './index.css'
import Constant from '../../constant'
import Header from './header'
import Content from './content'

/**
 * 页面详情组件
 */
class Detail extends Component {
  constructor (props) {
    super(props)
    this.onClickBack = this.onClickBack.bind(this)
  }
  onClickBack () {
    this.props.onClickIndex && this.props.onClickIndex()
  }
  render () {
    const { type, data } = this.props.data
    // 转换type为相应的解析文本
    const typeObj = Constant.typeObj[type]
    return (
      <div className='detail'>
        <Header title={data.title} fromTitle={typeObj.name} onClickBack={this.onClickBack} />
        <Content type={type} data={data} />
      </div>
    )
  }
}

export default Detail
