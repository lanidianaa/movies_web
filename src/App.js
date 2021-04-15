import React from "react";
import {Route} from "react-router-dom";
import {AllMovie, MovieDetail} from "./pages";

const App = () => {
  return (
    <>
      <div style={{backgroundColor: "#CFD8DC"}}>
        <Route path="/" exact component={AllMovie} />
      </div>
      <div style={{backgroundColor: "whitesmoke"}}>
        <Route path="/movie-detail" component={MovieDetail} />
      </div>
    </>
  );
};

export default App;
