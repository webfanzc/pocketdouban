import React, { Component } from 'react'

/**
 * 图书的页面详情页的内容组件
 */
class BookContent extends Component {
  render () {
    const {
      data
    } = this.props
    // 只选择前三个tag
    var tags = data.tags || []
    tags = tags.slice(0, 3)
    return (
      <div className='detail-content detail-book'>
        <div className='detail-content-top'>
          <img className='detail-content-cover' src={data.images.large} />
          <p className='detail-content-info'>名称：{data.title}</p>
          <p className='detail-content-info'>作者：{
            data.author.map((item) => {
              return <span key={item}>item</span>
            })
          }</p>
          <p className='detail-content-info'>出版社：{data.publisher}</p>
          <p className='detail-content-info'>日期：{data.pubdate}</p>
          <p className='detail-content-info'>评分：￥{data.rating.average}</p>
          <p className='detail-content-info'>价钱：￥{data.price}</p>
          <p className='detail-content-info'>
            {
              tags.map((item, index) => {
                return <span key={item.name} className='tag'>{item.name}</span>
              })
            }
          </p>
        </div>
        <div className='detail-content-desc'>
          <h2 className='detail-content-desc-title'>序言</h2>
          <p className='detail-content-desc-text'>{data.catalog}</p>
          <h2 className='detail-content-desc-title'>简介</h2>
          <p className='detail-content-desc-text'>{data.summary}</p>
        </div>
      </div>
    )
  }
}
/**
 * 音乐的页面详情页的内容组件
 */
class MusicContent extends Component {
  render () {
    const {
      data
        } = this.props
    const {
            publisher,
      pubdate
        } = data.attrs
    let tracks = data.attrs.tracks || ['']
    tracks = tracks[0].split('\n')
    console.log(tracks)
    return (
      <div className='detail-content detail-music'>
        <div className='detail-content-top'>
          <img className='detail-content-cover' src={data.image} />
          <p className='detail-content-info'>
            名称：{data.title}
            {
              data.tags.map((item, index) => {
                return <span key={item.name} className='tag'>{item.name}</span>
              })
            }
          </p>
          <p className='detail-content-info'>
            作者：
                        {
              data.author.map((item) => {
                return <span key={item.name}>{item.name}</span>
              })
            }
          </p>

          <p className='detail-content-info'>
            发布商：
                        {
              publisher.map((item) => {
                return <span key={item}>{item}</span>
              })
            }
          </p>
          <p className='detail-content-info'>
            发布时间：
                        {
              pubdate.map((item) => {
                return <span key={item}>{item}</span>
              })
            }
          </p>
          <p className='detail-content-info'>评分：{data.rating.average}</p>
        </div>
        <div className='detail-content-desc'>
          <h2 className='detail-content-title'>简介</h2>
          <p className='detail-content-desc-text'>{data.summary}</p>
          <h2 className='detail-content-title'>内容</h2>
          <ul className='detail-music-tracks'>
            {
              tracks.map((item) => {
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

/**
 * 电影的页面详情页的内容组件
 */
class MovieContent extends Component {
  render () {
    const { data } = this.props
    return (
      <div className='detail-content detail-movie'>
        <div className='detail-movie-top'>
          <img className='detail-movie-cover' src={data.images.large} />
        </div>
        <h2 className='detail-content-title'>简介</h2>
        <div className='detail-movie-info'>
          <p className='detail-movie-info-text'>
            名称：{data.title}
            {
              data.genres.map((item, index) => {
                return <span key={item} className='detail-movie-genres'>{item}</span>
              })
            }
          </p>
          <p className='detail-movie-info-text'>上映时间：{data.year}</p>
          <p className='detail-movie-info-text'>导演：{data.directors[0].name}</p>
          <p className='detail-movie-info-text'>{data.title}({data.original_title || ''})</p>
        </div>
        <h2 className='detail-content-title'>演员</h2>
        <div className='detail-movie-casts'>
          {
            data.casts.map((item, index) => {
              return (
                <div key={index} className='cast'>
                  <img className='cast-avators' src={item.avatars.medium} />
                  <span className='cast-name'>{item.name}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

/**
 * 页面详情页的内容组件
 */
class Content extends Component {
  render () {
    const {
            type,
      data
        } = this.props

    switch (type) {
      case 'book':
        return <BookContent data={data} />
      case 'movie':
        return <MovieContent data={data} />
      case 'music':
        return <MusicContent data={data} />
    };
  }
};

export default Content
