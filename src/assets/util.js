import fetchJsonp from 'fetch-jsonp'

export function encode (url) {
  return url.replace("'", '%27').replace('"', '%22')
}

export function fetchBooks ({ page = 0, keywords = '""' }) {
  keywords = keywords || '""'
  const COUNT = 20
  const start = COUNT * page
  return fetchJsonp(
        `https://api.douban.com/v2/book/search?q=${keywords}&start=${start}`
    ).then(response => {
      return response.json()
    })
}

export function fetchMovies ({ page = 0, keywords }) {
  let url = 'https://api.douban.com/v2/movie/top250'
  if (keywords) {
    url = `https://api.douban.com/v2/movie/search?q=${keywords}`
  }
  return fetchJsonp(
        url
    ).then(response => {
      return response.json()
    })
}

export function fetchMusics ({ page = 0, keywords = "''"
}) {
  const COUNT = 20
  const start = COUNT * page
  return fetchJsonp(
        `https://api.douban.com/v2/music/search?q=${keywords}&start=${start}`
    ).then(response => {
      return response.json()
    })
}
