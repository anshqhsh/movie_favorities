import { useState } from 'react'

import styles from './movieItem.module.scss'
import { Favorite } from 'assets/svgs'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const MovieItem = (item: IMovieItem) => {
  const [onFavorite, setOnFavorite] = useState(false)
  const { Title, Year, imdbID, Type, Poster } = item
  const [isOpenModal, setIsOpenModal] = useState(false)
  // 이부분을 localstorage에서 관리해야할 듯
  const OnFavoriteHandler = () => {
    setOnFavorite((_onFavorite) => !_onFavorite)
  }
  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }
  const afterOpenModal = () => {}

  return (
    <div className={styles.movieItem}>
      {isOpenModal && (
        <Modal
          isOpen={openModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          modal
        </Modal>
      )}
      <img className={styles.poster} src={Poster} alt='poster' />
      <div className={styles.titleWraper}>
        <h3>{Title}</h3>
        <div className={styles.tag}>
          <span className={styles.tagName}>{Type}</span>
        </div>
        <span className={styles.year}>{Year}</span>
        <Favorite onClick={openModal} />
      </div>
    </div>
  )
}

export default MovieItem
