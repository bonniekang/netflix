import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getSearch, IGetSearchResult } from '../api'
import { makeImgPath } from "../utils";
import Loader from '../Components/Loader'

const SearchBar = styled.form`
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
width: 100%;
padding: 20px;
`
const Wrapper = styled.div`
    padding: 30px;
`

const Input = styled(motion.input)`
background-color: transparent;
color: white;
all: unset;
 width: 100%;
 font-size: 28px;
`

const Box = styled.div<{bgPhoto:string}>`
    background-color: white;
    width: 300px;
    height: 200px;
    font-size: 66px;
    background-image: url(${(props) => props.bgPhoto});
    background-size: cover;
    background-position: center center;
`

const Title = styled.h3`
    padding: 20px;
    font-size: 20px;
`

const Container = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
`

interface IForm {
    keyword: string;
}

function Search(){
    const history = useHistory();
    const { register, handleSubmit } = useForm<IForm>();
    const validation = (data: IForm) => {
        history.push(`?keyword=${data.keyword}`)
        console.log(data)
    }
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    const { data: searchData, isLoading: searchLoading } = useQuery<IGetSearchResult>(["searchResults", keyword], () => getSearch(keyword))

    return(
        <Wrapper>
            {searchLoading ? (
                <Loader />
            ) : (
                <>
                    <SearchBar onSubmit={handleSubmit(validation)}>
                    <Input {...register("keyword", { required: true, minLength: 2 })} placeholder="Search..." />
                    </SearchBar>
                    {keyword ? (<Container>
                        {searchData?.results.map((res : any) => (
                            <Box bgPhoto={makeImgPath(res.backdrop_path, "w500")}>
                                <Title>{res.title}</Title>
                            </Box>
                        ))}
                    </Container>) : null}
                </>
            )}
        </Wrapper>
    )
}

export default Search;