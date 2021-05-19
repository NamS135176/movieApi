interface IMovieData {
    dates: object,
    page: number,
    results: Array<object>,
    total_page: number,
    total_results: number
}

interface IMovieTrend {
    id: number,
    backdrop_path:string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    key:string
}
interface ITVTrend {
    backdrop_path: string,
    first_air_date: string,
    id: number,
    name: string,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}

interface IMovieState {
    loading: boolean;
    listMoviesTrend: IMovieTrend[];
    listMoviesPopular: IMovieTrend[],
    listTVPopular: IMovieTrend[]
}

interface IAllState {
    movies: IMovieState;
}