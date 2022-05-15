import { atom } from 'hooks/state'
import store from 'store'

export const movieListState = atom<IMovieItem[] | []>({
  key: '#movieListState',
  default: [],
})

export const favoriteListState = atom<IMovieItem[] | []>({
  key: '#favoriteListState',
  default: store.get('favorites') || [],
})
