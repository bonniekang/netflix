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

export interface IGetSearchResult {
    page : number;
    results : IMovie[];
}

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json())
}

export function getSearch(keyword : any){
    return fetch(`${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}`).then((response) => response.json())
}