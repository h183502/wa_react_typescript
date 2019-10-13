import * as React from "react";
import axios from 'axios';
import {Movie} from "../types/Movie";

interface IOwnProps {
    movies: ReadonlyArray<Movie>
}
interface IOwnState {
    title: string
    apiKey: string
}

export class getMovieByTitle extends React.PureComponent<IOwnProps, IOwnState> {
    state: IOwnState = {
        title: '',
        apiKey: '9f932604'
    };

    setTitle = (value: string) => {
        this.setState({title: value})
    };

    getMovieByTitle = async () => {
        try {
            const res = await axios.get('http://www.omdbapi.com/?t=' + this.state.title + '&' + this.state.apiKey)
            return {movies: res.data}
        } catch (e) {
            return {movies: []}
        }
    };
    render(){
        return(
        )
    }

}

export default getMovieByTitle

