import { useQuery } from 'react-query'
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from '../api'
import Loader from '../Components/Loader'
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import {makeImgPath} from '../utils';

const Wrapper = styled.div`
    background: black;
`

const Banner = styled.div<{bgPhoto: string}>`
    height: 60vh;
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
    padding: 100px 0;
    display:grid; 
    grid-auto-flow:column;  
    grid-gap:10px; 
    margin:30px;
    overflow:auto;
`

const Box = styled.div<{bgPhoto:string, layoutId: string}>`
    background-color: white;
    width: 300px;
    height: 200px;
    font-size: 66px;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: center center;
    position: relative;
    &:hover {
        z-index: 50;
        transform: scale(1.3);
    }
`

const Info = styled.div`
  padding: 10px;
  background-color: black;
  opacity: 1;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    color: white;
    text-align: center;
    font-size: 18px;
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top:0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`

const BigMovie = styled(motion.div)`
    position: absolute;
    width: 40vw;
    height: 70vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow: hidden;
    background-color: #161a1d;
    z-index: 100;
`

const BigCover = styled.div`
    width: 100%;
    background-size: cover;
    background-position: center center;
    height: 300px;
`

const BigTitle = styled.h3`
    padding: 20px;
    font-size: 46px;
    
`

const BigOverview = styled.p`
    padding: 20px;
    bottom: 10px;
    font-weight: 200;
    position: absolute;
`

const offset = 6;


function Home(){
    const history = useHistory();
    const bigMovieMatch = useRouteMatch<{movieId:string}>('/movies/:movieId')
    const {scrollY} = useViewportScroll()
    const {data, isLoading} = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
    const onClickBox = (movieId : number) => {
        history.push(`/movies/${movieId}`)
    }
    const onClickOverlay = () => history.push('/')
    const clickMovie = bigMovieMatch?.params.movieId && data?.results.find((movie) => movie.id === +bigMovieMatch.params.movieId)


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
                        <Row>
                            {data?.results.slice(1).map((movie) => (
                                <Box
                                layoutId={movie.id+''}
                                bgPhoto={makeImgPath(movie.backdrop_path, "w500")} 
                                onClick={()=> onClickBox(movie.id)} >
                                    <Info><h4>{movie.title}</h4></Info>
                                </Box>
                            ))}
                        </Row>
                    </Slider>
                    <AnimatePresence>
                        {bigMovieMatch ? (
                            <>
                                <Overlay onClick={onClickOverlay}/>
                                <BigMovie 
                                style={{ top: scrollY.get() + 100 }}
                                layoutId={bigMovieMatch.params.movieId}>
                                    {
                                        clickMovie && (
                                            <>
                                                <BigCover style={{ backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImgPath(
                            clickMovie.backdrop_path,
                            "w500"
                          )})` }}/>
                                                <BigTitle>
                                                {clickMovie.title}
                                                </BigTitle>
                                                <BigOverview>
                                                {clickMovie.overview}
                                                </BigOverview>
                                            </>
                                        )
                                    }
                                </BigMovie>
                            </>
                        ) : null}
                    </AnimatePresence>
                </>
            )}
        </Wrapper>
    )
}

export default Home;