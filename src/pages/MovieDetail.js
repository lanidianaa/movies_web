import React, {useEffect, useState} from "react";
import queryString from "querystring";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailAct} from "../redux/action";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  useEffect(() => {
    const query = queryString.parse(window.location.search)["?id"];
    setId(query);
  }, []);

  useEffect(() => {
    if (id !== "") {
      dispatch(fetchDetailAct(id));
    }
    console.log(id);
  }, [dispatch, id]);

  const {details} = useSelector((state) => state.movie);

  return (
    <div className="container flex">
      <div style={{paddingTop: "15px"}}>
        <Link to="/">
          <Button style={{backgroundColor: "blue", color: "whitesmoke"}}>
            Back
          </Button>
        </Link>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <img
              src={details?.Poster}
              alt={details?.Title}
              style={{height: "300px", width: "200px"}}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div>{details?.Title}</div>
            <div>Rated: {details?.Rated}</div>
            <div>Duration: {details?.Runtime}</div>
            <div>Genre: {details?.Genre}</div>
            <div>Release Date: {details?.Released}</div>
            <div>Language: {details?.Language}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
