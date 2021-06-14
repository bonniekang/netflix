import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
import Message from "../../Components/Message"
import Poster from "../../Components/Poster"

const Container = styled.div``;

const Form = styled.form`
width: 100%;
`;

const Input = styled.input`
 all: unset;
 width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm}) => <Container>
    <Form onSubmit={handleSubmit}>
        <Input placeholder="Search.." value={searchTerm} onChange={updateTerm}></Input>
    </Form>
    {loading ? <Loader/> : <>
        {movieResults && movieResults.length > 0 && (<Section title="Movie Results">{movieResults.map(movie => (<Poster key={movie.id} id={movie.id} isMovie={true} title={movie.original_title} rating={movie.vote_average} year={movie.release_date.substring(0, 4)} imageUrl={movie.poster_path} />))}</Section>)}
        {tvResults && tvResults.length > 0 && (<Section title="TV Results">{tvResults.map(show => (<Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
              />))}</Section>)}
        {error && <Message color="#e74c3c" text={error}/>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (<Message color="#95a5a6" text="Nothing found."/>)}
    </>}
</Container>;

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;