import React from "react"
import SearchPresenter from "./SearchPresenter.js"

export default class extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        error: null,
        loading: false
    }

    render() {
        const { movieResults, tvResults, error, searchTerm, loading} = this.state;
        return (
        <SearchPresenter searchTerm={searchTerm} movieResults={movieResults} tvResults={tvResults} error={error} loading={loading} />
        )
    }
}