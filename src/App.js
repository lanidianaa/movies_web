import React from "react";
import {Route} from "react-router-dom";
import {AllMovie, MovieDetail} from "./pages";
// import Movies from "./pages/Movies";

const App = () => {
  return (
    <div>
      <Route path="/" exact component={AllMovie} />
      <Route path="/movie-detail" component={MovieDetail} />
      {/* <Route path="/movies" component={Movies} /> */}
    </div>
  );
};

export default App;
