import { useState } from 'react'

import styles from './movieItem.module.scss'

const MovieItem = (item: IMovieItem) => {
  const [onFavorite, setOnFavorite] = useState(false)
  const { Title, Year, imdbID, Type, Poster } = item

  // 이부분을 localstorage에서 관리해야할 듯
  const OnFavoriteHandler = () => {
    setOnFavorite((_onFavorite) => !_onFavorite)
  }
  return (
    <div className={styles.movieItem}>
      <img className={styles.poster} src={Poster} alt='poster' />
      <div className={styles.titleWraper}>
        <h3>{Title}</h3>
        <div className={styles.tag}>
          <span className={styles.tagName}>{Type}</span>
        </div>
        <span className={styles.year}>{Year}</span>
      </div>
    </div>
  )
}

export default MovieItem
