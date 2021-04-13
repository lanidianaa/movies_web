import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "../components/MovieCard";
import {fetchMovieAct} from "../redux/action";

const AllMovie = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovieAct({page}));
  }, [dispatch]);
  const {movies, loading} = useSelector((state) => state.movie);

  const [load, setLoad] = useState(loading);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadMovie(page);
      }
    }
  };
  useEffect(() => {
    loadMovie(page);
  }, []);

  const loadMovie = (page) => {
    setLoad(true);
    setTimeout(() => {});
  };

  return (
    <div className="container flex">
      {/* <div> */}
      {movies.map((val, i) => (
        <div>
          <MovieCard
            image={val.Poster}
            name={val.Title}
            id={val.imdbID}
            type={val.Type}
            year={val.Year}
          />
        </div>
      ))}
      {loading ? <div className="text-center">loading movie data...</div> : ""}
      {noData ? (
        <div className="text-center">there's no more movies...</div>
      ) : (
        ""
      )}
      {/* </div> */}
    </div>
  );
};

export default AllMovie;
