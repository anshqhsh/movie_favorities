interface IMovieList {
  Search: IMovieItem[]
  totalResults: number
  Response: boolean
}

interface IMovieItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
