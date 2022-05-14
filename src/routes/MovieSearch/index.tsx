import { useCallback, useEffect, useState } from 'react'
import MovieItem from 'routes/MovieItem'
import { getGripMovieApi } from 'services/movie'

import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'

const MovieSearch = () => {
  const [search, setSearch] = useState('movie') // input에서 값을 받아 검색
  const [movieData, setMovieData] = useState<IMovieItem[]>([])
  const [error, setError] = useState('')
  const [idxPage, setIdxPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(false)

  // console.log('', movieData)
  // const getApiPage = (search, page) => {}

  useEffect(() => {
    setIsLoading(true)
    getGripMovieApi({
      s: search, // 검색어
      apikey: '1f3dc839',
      page: idxPage,
    })
      .then((res) => {
        // console.log(res)
        setIsLoading(false)
        setMovieData(res.data.Search)
      })
      .catch(onError)
  }, [idxPage, search])

  // 스크롤시 추가할 내용
  const handleScroll = useCallback((): void => {
    const { innerHeight } = window // 브라우저창 내용 크기(스크롤포함x)
    const { scrollHeight } = document.body // 브라우저의 총크기 스크롤 포함
    const { scrollTop } = document.documentElement // 현재 스크롤바 위치

    // 맨 하단에 도착
    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setIdxPage(1 + idxPage) // page값을 늘려주고
      getGripMovieApi({
        s: search, // 검색어
        apikey: '1f3dc839',
        page: idxPage,
      })
        .then((res) => {
          // console.log(res)
          setMovieData(movieData.concat(res.data.Search))
          console.log(movieData)
        })
        .catch(onError)
    }
  }, [search, idxPage])

  // Infinity Scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    // 스크롤 발생때 handleScroll 함수 호출 추가
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      // 해당 컴포넌트가 언마운트 될때 스크롤 이벤트를 제거해 줘얗한다.
    }
  }, [handleScroll])

  // error check
  const onError = (err: any) => {
    setError(err.toString())
    setTimeout(() => {
      setError('')
    }, 3000)
    clearTimeout()
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
      {isLoading && <div>Loading</div>}
    </div>
  )
}

export default MovieSearch
