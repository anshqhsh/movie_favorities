import { useEffect, useState } from 'react'
import MovieItem from 'routes/MovieItem'
import { getGripMovieApi } from 'services/movie'

import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'

const MovieSearch = () => {
  const [search, setSearch] = useState('') // input에서 값을 받아 검색
  const [movieData, setMovieData] = useState<IMovieItem[]>([])
  const [error, setError] = useState('')
  console.log('', movieData)

  const handleAddClick = () => {} // *** search 기능 구현

  useEffect(() => {
    getGripMovieApi({
      s: 'movie', // 검색어
      apikey: '1f3dc839',
      page: 2,
    })
      .then((res) => {
        console.log(res)
        setMovieData(res.data.Search)
      })
      .catch(onError)
  }, [])

  // error check
  const onError = (err: any) => {
    setError(err.toString())
    setTimeout(() => {
      setError('')
    }, 3000)
  }

  const formChangeHandler = (e: any) => {
    setSearch(e.currentTarget.value)
  }

  return (
    <div className={styles.movieContainer}>
      <h1>MovieSearch</h1>
      <form className={styles.searchForm}>
        <input type='text' placeholder='Search Movie' onChange={formChangeHandler} />
      </form>
      {error && <div>{error}</div>}
      {movieData?.map((item) => (
        <MovieItem key={item.imdbID} {...item} />
      ))}
    </div>
  )
}

export default MovieSearch
