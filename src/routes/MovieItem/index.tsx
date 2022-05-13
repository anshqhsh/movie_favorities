import { useEffect, useState } from 'react'
import { getGripMovieApi } from 'services/movie'
import styles from './movieItem.module.scss'
// import { useRecoil } from 'hooks/state'
// import { todoListState } from 'states/todo'

const MovieItem = (item: IMovieItem) => {
  const [onFavorite, setOnFavorite] = useState(false)
  const { Title, Year } = item
  console.log('', item)

  // 이부분을 localstorage에서 관리해야할 듯
  const OnFavoriteHandler = () => {
    setOnFavorite((_onFavorite) => !_onFavorite)
  }
  return (
    <div className={styles.movieItem}>
      {Title}
      {Year}
    </div>
  )
}

export default MovieItem
