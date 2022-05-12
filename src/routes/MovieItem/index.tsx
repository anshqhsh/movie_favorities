import { useEffect, useState } from 'react'
import { getGripMovieApi } from 'services/movie'
import styles from './movieItem.module.scss'
// import { useRecoil } from 'hooks/state'
// import { todoListState } from 'states/todo'

const MovieItem = (item: IMovieItem) => {
  const [onFavorite, setOnFavorite] = useState(false)

  console.log(item)

  const OnFavoriteHandler = () => {
    setOnFavorite((_onFavorite) => !_onFavorite)
  }
  return (
    <div className={styles.movieContainer}>
      <h1>정보</h1>
    </div>
  )
}

export default MovieItem
