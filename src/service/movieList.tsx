import * as React from "react";
import Movie from '../types/Movie'

interface State {
    movie: Movie
}

const Movies = (state: State) => {
    console.log(state)
    return(
        <div>
                <ul>
                    <li>{state.movie.Title}</li>
                    <li>{state.movie.Year}</li>
                    <li>{state.movie.Genre}</li>
                    <li>{state.movie.Director}</li>
                    <li>{state.movie.Writer}</li>
                    <li>{state.movie.Actors}</li>
                   {/*{state.movie.Ratings && state.movie.Ratings.map((ratings, index) => (*/}
                   {/*     <li key={index}>{ratings}</li>*/}
                   {/* ))}*/}
                   <li>{state.movie.Plot}</li>
                    <li>{state.movie.BoxOffice}</li>
                </ul>

        </div>
    )
}

export default Movies
