import { useQuery } from 'react-query'
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from '../api'
import Loader from '../Components/Loader'
import {makeImgPath} from '../utils';

const Wrapper = styled.div`
    background: black;
`

const Banner = styled.div<{bgPhoto: string}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url(${(props) => props.bgPhoto})
`

const Title = styled.h2`
    font-size: 68px;
    margin-bottom: 20px;
`

const Overview = styled.p`
    font-size: 30px;
    width: 50%;
`

function Home(){
    const {data, isLoading} = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
    console.log(data)
    return(
        <Wrapper>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Banner bgPhoto={makeImgPath(data?.results[0].backdrop_path || '')}>
                        <Title>{data?.results[0].title}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                </>
            )}
        </Wrapper>
    )
}

export default Home;