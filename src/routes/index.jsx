import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import TodoList from './TodoList'
import Header from 'routes/_shared/Header'
import MovieSearch from './MovieSearch'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='search' element={<MovieSearch />} />
          {/* <Route path='favorite' element={<MovieFavorite />} /> */}
          <Route path='favorite' element={<TodoList />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
