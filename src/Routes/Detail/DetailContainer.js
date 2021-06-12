import React from "react"
import DetailPresenter from "./DetailPresenter.js"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        const { 
            match: {params: {id}},
            history: {push},
            location: {pathname}
        } = this.props;
        this.isMovie = pathname.includes("/movie/")
        const parsedId = parseInt(id)
        if(isNaN(parsedId)){
            return push('/')
        }
        if
    }

    render() {
        const { result, loading, error } = this.state;
        return (
            <DetailPresenter result={result} loading={loading} error={error} />
        )
    }
}