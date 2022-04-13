const API_KEY = "f3e51bf3b1a3f8bcb87fc17f17ed8c28";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    id: number;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    }
    page : number;
    results : IMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json())
}