import styles from './movieSearch.module.scss'
// import { useRecoil } from 'hooks/state'
// import { todoListState } from 'states/todo'

const MovieSearch = () => {
  // const [todoList] = useRecoil(todoListState)

  const handleAddClick = () => {}

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
