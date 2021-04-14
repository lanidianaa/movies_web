import React, {useState, useEffect, useRef, useCallback} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {api_url} from "../db";
import {Button} from "@material-ui/core";
import MovieCard from "../components/MovieCard";

const AllMovie = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("all");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  const handleClick = () => {
    showMovie(query, pageNumber);
  };

  useEffect(() => {
    setMovie([]);
  }, [query]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const showMovie = (que, pages) => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: api_url,
      params: {s: que, page: pages},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovie((prevMovie) => {
          return [...new Set([...prevMovie, ...res.data.Search])];
        });
        setHasMore(res.data.Search.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({type: "FETCH_DATA_FAILED", payload: e});
        setError(true);
      });
    return () => cancel();
  };

  //to load more data
  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="container flex">
      <div style={{display: "flex", paddingTop: "15px", alignItems: "center"}}>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        <Button
          style={{
            backgroundColor: "teal",
            marginLeft: "10px",
            color: "whitesmoke",
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
      <div>
        {movie?.map((val, i) => {
          if (movie.length === i + 1) {
            return (
              <div ref={lastMovieElementRef} key={val.imdbID}>
                <MovieCard
                  image={val.Poster}
                  name={val.Title}
                  id={val.imdbID}
                  type={val.Type}
                  year={val.Year}
                />
              </div>
            );
          } else {
            return (
              <div key={val.imdbID}>
                <MovieCard
                  image={val.Poster}
                  name={val.Title}
                  id={val.imdbID}
                  type={val.Type}
                  year={val.Year}
                />
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default AllMovie;
