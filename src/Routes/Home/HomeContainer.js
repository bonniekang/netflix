import React from "react"
import HomePresenter from "./HomePresenter.js"
import { moviesApi } from "../../api.js";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }

    async componentDidMount(){
        try {
            const { data: { results: nowPlaying} } = await moviesApi.nowPlaying();
            const { data: { results: upcoming} } = await moviesApi.popular();
            const { data: { results: popular} } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
        } catch{
            this.setState({
                error: "Can't find moviesß"
            })
        } finally{
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading} = this.state;
        return (
        <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />
        )
    }
}