interface IMovieData {
    dates: object,
    page: number,
    results: Array<object>,
    total_page: number,
    total_results: number
}

interface IMovieTrend {
    id: number,
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

interface IMovieState {
    loading: boolean;
    listMoviesTrend: IMovieTrend[];
}

interface IAllState {
    movies: IMovieState;
}