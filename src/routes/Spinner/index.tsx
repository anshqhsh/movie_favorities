import styles from './spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
      <span>Loading...</span>
    </div>
  )
}
export default Spinner
