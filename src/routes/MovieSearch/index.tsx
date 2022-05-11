import { useEffect, useState } from 'react'
import { getGripMovieApi } from 'services/movie'
import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'
// import { todoListState } from 'states/todo'

const MovieSearch = () => {
  const [searchData, setSearchData] = useState('')
  const [movieData, setMovieData] = useState([])
  const handleAddClick = () => {}

  useEffect(() => {
    getGripMovieApi({
      apikey: '92e32667',
      s: 'ionman',
      page: 2,
    }).then((res: any) => {
      console.log(res)
      setSearchData(res.data)
      console.log(res.data)
    })
  }, [])

  if (!movieData) return null

  return (
    <div className={styles.todoList}>
      MovieSearch
      <div className={styles.centering}>
        <h1>Hi! this is your assignment.</h1>
        <ul className={styles.tasks}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
        </ul>
        <button type='button' className={styles.addButton} onClick={handleAddClick} aria-label='Add button' />
      </div>
    </div>
  )
}

export default MovieSearch
