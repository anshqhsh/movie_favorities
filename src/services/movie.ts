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

// export const getMovieData = (searchValue: string, page: number) => {
//   let response
//   getGripMovieApi({ s: searchValue, apikey: '1f3dc839', page }).then((res) => {
//     response = res.data.Search
//     return response
//   }).catch {
//     response = onError
//     return response
//   }
// }

//   // error check
//   const onError = (err: any) => {
//     setTimeout(() => {
//     }, 3000)
//     clearTimeout()
//     return err.toString()
//   }
