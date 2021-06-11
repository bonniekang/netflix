import React from "react"
import DetailPresenter from "./DetailPresenter"

export default class extends React.Component {
    state={
        tvDetail: null,
        movieDetail: null,
        loading: false,
        error: null
    }
    render() {
        const { tvDetail, movieDetail, loading, error } = this.state;
        return (
            <DetailPresenter tvDetail={tvDetail} movieDetail={movieDetail} loading={loading} error={error} />
        )
    }
}