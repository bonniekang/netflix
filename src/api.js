import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "f3e51bf3b1a3f8bcb87fc17f17ed8c28",
        language: "en-US"
    }

})

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    airingToday: () => api.get("tv/airing_today"),
    popular: () => api.get("tv/popular"),
    tvDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}