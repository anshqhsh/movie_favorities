import { useCallback, useEffect, useState } from 'react'
import MovieItem from 'routes/MovieItem'
import { getGripMovieApi } from 'services/movie'

import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'

const MovieSearch = () => {
  const [search, setSearch] = useState('') // input에서 값을 받아 검색
  const [movieData, setMovieData] = useState<IMovieItem[]>([])
  const [error, setError] = useState('')
  const [idxPage, setIdxPage] = useState<number>(1)

  // console.log('', movieData)
  // *** search 기능 구현
  const handleAddClick = () => {}

  console.log('key', process.env.REACT_APP_APIKEY)
  useEffect(() => {
    getGripMovieApi({
      s: 'movie', // 검색어
      apikey: '1f3dc839',
      page: idxPage,
    })
      .then((res) => {
        // console.log(res)
        setMovieData(res.data.Search)
      })
      .catch(onError)
  }, [idxPage])

  // 스크롤시 추가할 내용
  const handleScroll = useCallback((): void => {}, [])

  // Infinity Scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    // 스크롤 발생때 handleScroll 함수 호출 추가
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      // 해당 컴포넌트가 언마운트 될때 스크롤 이벤트를 제거해 줘얗한다.
    }
  })
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
        <input className={styles.searchInput} type='text' placeholder='Search Movie' onChange={formChangeHandler} />
      </form>
      {error && <div>{error}</div>}
      {movieData?.map((item) => (
        <MovieItem key={item.imdbID} {...item} />
      ))}
    </div>
  )
}

export default MovieSearch
