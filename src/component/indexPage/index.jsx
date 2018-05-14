import React, { Component } from 'react'

import './index.css'
import Search from '../search'
import List from '../list'
import Nav from '../nav'
import { fetchBooks, fetchMovies, fetchMusics } from '../../assets/util'
import mookBooks from '../../mocks/books'
import mookMovies from '../../mocks/movies'
import mookMusics from '../../mocks/musics'

const useMock = true

/**
 * 页面首页
 */
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      curIndex: 0,
      books: [],
      movies: [],
      musics: []
    }
    this.onChangeNav = this.onChangeNav.bind(this)
  }

  onChangeNav (index) {
    this.setState({
      curIndex: index
    })
  }

  fetchBooks (keywords) {
    fetchBooks({ keywords }).then(data => {
      this.setState({
        books: data.books
      })
    })
  }

  fetchMovies (keywords) {
    fetchMovies({ keywords }).then(data => {
      this.setState({
        movies: data.subjects
      })
    })
  }

  fetchMusics (keywords) {
    fetchMusics({ keywords }).then(data => {
      this.setState({
        musics: data.musics
      })
    })
  }

  getList () {
    const curIndex = this.state.curIndex
    const { books, movies, musics } = this.state
    const navMaps = [{
      type: 'book',
      data: books
    }, {
      type: 'movie',
      data: movies
    }, {
      type: 'music',
      data: musics
    }]
    const { type, data } = navMaps[curIndex]
    return (
      <List
        type={type}
        data={data}
        onClickDetail={this.props.onClickDetail}
      />
    )
  }

  onSearch (value) {
    const curIndex = this.state.curIndex

    if (curIndex === 0) {
      this.fetchBooks(value)
    } else if (curIndex === 1) {
      this.fetchMovies(value)
    } else if (curIndex === 2) {
      this.fetchMusics(value)
    }
  }

  componentWillMount () {
    // 是否使用本地数据，用来调试，因为拉太多会被限制
    if (useMock) {
      this.setState({
        books: mookBooks.books,
        movies: mookMovies.subjects,
        musics: mookMusics.musics
      })
    } else {
      fetchBooks({page: 0}).then(data => {
        this.setState({
          books: data.books
        })
      })
      fetchMovies({}).then(data => {
        this.setState({
          movies: data.subjects
        })
      })
      fetchMusics({page: 0}).then(data => {
        this.setState({
          musics: data.musics
        })
      })
    }
  }

  render () {
    return (
      <div className='index'>
        <Search
          index={this.state.curIndex}
          onSearch={this.onSearch.bind(this)}
        />
        { this.getList() }
        <Nav onChangeNav={this.onChangeNav} />
      </div>
    )
  }
}

export default Index
