import {useEffect, useState} from "react";
import axios from "axios";
import {api_url} from "../db";
import {useDispatch} from "react-redux";

export default function useMovieSearch(query, pageNumber) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movie, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: api_url,
      params: {s: query ? query : "All", page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovies((prevMovies) => {
          return [...new Set([...prevMovies, ...res.data.Search])];
        });
        dispatch({type: "FETCH_MOVIES_SUCCESS", payload: res.data});
        setHasMore(res.data.Search.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber, dispatch]);
  return {loading, error, hasMore};
}
