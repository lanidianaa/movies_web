import React from "react";
import {Route} from "react-router-dom";
import {AllMovie, MovieDetail} from "./pages";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={AllMovie} />
      <Route path="/movie-detail" component={MovieDetail} />
    </div>
  );
};

export default App;
