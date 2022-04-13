import { useQuery } from 'react-query'
import { getMovies } from '../api'

function Home(){
    const {data, isLoading} = useQuery(["movies", "nowPlaying"], getMovies)
    return(
        <div>
            Home
        </div>
    )
}

export default Home;