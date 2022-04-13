import { useState } from "react";
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
    font-size: 20px;
    width: 50%;
    font-weight: 300;
`
const Slider = styled.div`
    position:relative;
`

const Row = styled.div`
    display:grid;   
    grid-auto-flow:column;  
    grid-gap:10px; 
    margin:30px;
    overflow:hidden;
`

const Box = styled.div<{bgPhoto:string}>`
    background-color: white;
    width: 200px;
    height: 200px;
    font-size: 66px;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: center center;
`
const Left = styled.button`
    position:absolute;
    left: 0;
    z-index: 100;
    top: 50%;
`

const Right = styled.button`
    position:absolute;
    right: 0;
    z-index: 100;
    top: 50%;
`
const offset = 6;


function Home(){
    const {data, isLoading} = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
    const [index, setIndex] = useState(0)


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
                    <Slider>
                        <Left>left</Left>
                        <Row>
                            {data?.results.slice(1).map((movie) => (
                                <Box bgPhoto={makeImgPath(movie.backdrop_path, "w500")}>
                                </Box>
                            ))}
                        </Row>
                        <Right>right</Right>
                    </Slider>
                </>
            )}
        </Wrapper>
    )
}

export default Home;