import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style.css'
// 页面组件
import Index from './component/indexPage'
import Detail from './component/detailPage'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'index'
    }
    this.jump = this.jump.bind(this)
  }

  /**
  * 页面跳转，相当于路由
  * @param  {string} type 跳转类型
  */
  jump (type) {
    this.setState({
      page: type
    })
  }

  render () {
    const page = this.state.page
    const className = 'app' + (page === 'detail' ? ' detail-page' : '')
    return (
      <div className={className}>
        <Index onClickDetail={(itemData) => {
          this.itemData = itemData
          this.jump('detail')
        }} />
        {page === 'detail' &&
          <Detail data={this.itemData} onClickIndex={() => {
            this.jump('index')
          }} />
        }
      </div>
    )
  }
}

// 首页展示
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
