import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from 'routes/Header'
import MovieSearch from './MovieSearch'
import MovieFavorite from './MovieFavorite'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='search' element={<MovieSearch />} />
          <Route path='favorite' element={<MovieFavorite />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
