import { useEffect, useState } from 'react'
import MovieItem from 'routes/MovieItem'
import { getGripMovieApi } from 'services/movie'

import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'

const MovieSearch = () => {
  const [search, setSearch] = useState('') // input에서 값을 받아 검색
  const [movieData, setMovieData] = useState<IMovieItem[]>()

  const handleAddClick = () => {} // *** search 기능 구현

  useEffect(() => {
    getGripMovieApi({
      s: 'ion', // 검색어
      apikey: '1f3dc839',
      page: 2,
    }).then((res) => {
      setMovieData(res.data.Search)
    })
  }, [])

  const formChangeHandler = (e: any) => {
    setSearch(e.currentTarget.value)
  }
  console.log(movieData)
  return (
    <div className={styles.movieContainer}>
      <h1>MovieSearch</h1>
      <form className={styles.searchForm}>
        <input type='text' placeholder='Search Movie' onChange={formChangeHandler} />
      </form>
      {movieData?.map((item) => (
        <MovieItem key={item.imdbID} {...item} />
      ))}
    </div>
  )
}

export default MovieSearch
