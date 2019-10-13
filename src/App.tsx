import React from 'react';
import './App.css';
import GetMovieByTitle from "./service/getMovieRequest";

const App: React.FC = () => {
  return (
    <div>
        <GetMovieByTitle />
    </div>
  );
}

export default App;
