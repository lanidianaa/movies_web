import axios from "axios";
import {api_url} from "../../db";

export const fetchMovieAct = (query) => {
  return async (dispatch) => {
    try {
      dispatch({type: "FETCH_DATA_START"});
      if (query) {
        const {search, page} = query;
        const response = await axios.get(
          `${api_url}s=${search ? search : "all"}&page=${page ? page : "1"}`
        );
        dispatch({type: "FETCH_MOVIES_SUCCESS", payload: response.data});
      }
    } catch (err) {
      dispatch({type: "FETCH_DATA_FAILED", payload: err.message});
    }
  };
};

export const fetchDetailAct = (id) => {
  return async (dispatch) => {
    try {
      dispatch({type: "FETCH_DATA_START"});
      const response = await axios.get(`${api_url}i=${id ? id : ""}`);
      dispatch({type: "FETCH_DETAIL_SUCCESS", payload: response.data});
    } catch (err) {
      dispatch({type: "FETCH_DATA_FAILED", payload: err});
    }
  };
};
