import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import TodoList from './TodoList'
import Weather from './Weathers'
import GNB from 'routes/_shared/GNB'
import MovieSearch from './MovieSearch'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='search' element={<MovieSearch />} />
          {/* <Route path='favorite' element={<MovieFavorite />} /> */}
          <Route path='todo' element={<TodoList />} />
          <Route path='weather' element={<Weather />}>
            <Route path=':city' element={<Weather />} />
          </Route>
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
