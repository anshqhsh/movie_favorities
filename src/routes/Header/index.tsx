import cx from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <nav className={styles.tab}>
      <ul>
        <li>
          <NavLink to='search' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='favorite' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            favorite
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
