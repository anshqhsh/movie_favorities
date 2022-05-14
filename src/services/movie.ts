import { axios } from 'hooks/worker'

const BASE_URL = 'http://www.omdbapi.com'

interface Params {
  s: string
  apikey: string | undefined
  page: number
}

export const getGripMovieApi = (params: Params) =>
  axios.get<IMovieList>(`${BASE_URL}/?`, {
    params,
  })
