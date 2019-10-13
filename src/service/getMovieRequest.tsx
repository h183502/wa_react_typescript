/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import * as React from "react";
import axios from 'axios';
import Movie from '../types/Movie'
import Movies from "./movieList";
// tslint:disable-next-line:no-unused-expression



interface IOwnState {
    title: string
    apiKey: string
    movies: Movie
}

class GetMovieByTitle extends React.Component<{}, IOwnState> {
    state: IOwnState = {
        title: '',
        apiKey: '9f932604',
        movies: {}
    };

    setTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: event.target.value})
    }

    searchByTitle = async () => {
        try {
            const res = await axios.get('http://www.omdbapi.com/?t=' + this.state.title + '&apikey=' + this.state.apiKey)
            console.log(res.data);
            return this.setState({movies: res.data})
        } catch (e) {
            return {}
        }
    };

    cssGridContainer = css`
    display: grid;
    grid-template-columns: auto auto;
    padding: 5px;
    `;
    cssGridItem = css`
    padding: 20px;
    font-size: 20px;
    text-align: center;
    background-color: Linen;
    border: 1px solid
    `;
    cssHeader = css`
    text-align: center;
    background-color: NavajoWhite;
    color: dimgray;
    font-size: 40px;
    padding: 25px;
    `;
    cssFooter = css`
    text-align: center;
    font-size: 20px;
    background-color: navajowhite;
    color: dimgray;
    
    `;



    render(){
        return(
            <div>
                <header css={this.cssHeader}>Find a movie</header>

                <div css={this.cssGridContainer}>
                    <div css={this.cssGridItem}>
                        <p>Søk etter filmtittel:</p>
                        <p>
                            <input type={'text'}
                                   value={this.state.title}
                                   onChange={this.setTitle}
                            />
                            <button onClick={this.searchByTitle}>Søk</button>
                        </p>
                    </div>
                    <div css={this.cssGridItem}>
                        <Movies movie={this.state.movies}/>
                    </div>
                </div>
                <footer css={this.cssFooter}>So much more I wanted to do!</footer>
            </div>
        )
    }

}

export default GetMovieByTitle

