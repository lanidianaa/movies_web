import axios from "axios";
import {api_url} from "../../db";

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
