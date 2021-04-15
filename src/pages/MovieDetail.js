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
      <div style={{position: "absolute", paddingTop: "15px"}}>
        <Link to="/" style={{textDecoration: "none"}}>
          <Button style={{backgroundColor: "#187BCD", color: "whitesmoke"}}>
            Back
          </Button>
        </Link>
      </div>
      <div
        style={{display: "flex", justifyContent: "center", paddingTop: "80px"}}
      >
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
              style={{
                height: "400px",
                width: "300px",
                border: "1px solid gray",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "40px",
              fontSize: "24px",
            }}
          >
            <div style={{display: "flex", flexDirection: "row"}}>
              <div style={{fontWeight: "bold"}}>{details?.Title}&nbsp;</div>
              <div style={{color: "gray"}}>({details?.Year})</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontWeight: "bold",
              }}
            >
              <div>Directed by&nbsp;</div>
              <div style={{color: "#2A9DF4"}}>{details?.Director}</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "14px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <div style={{fontWeight: "500", color: "gray"}}>
                imdb ID:&nbsp;
              </div>
              <div style={{fontWeight: "500", color: "#2A9DF4"}}>
                {details?.imdbID}
              </div>
            </div>
            <div style={{borderTop: "2px solid gray", width: "900px"}}></div>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: "35px",
                    fontSize: "16px",
                  }}
                >
                  <div style={{fontWeight: "bold"}}>
                    Production: <br />
                    Writer: <br />
                    Genre: <br />
                    Release Date: <br />
                    Duration: <br />
                    Country: <br />
                    Language: <br />
                    Type: <br />
                    DVD (date): <br />
                    Box Office (income): <br />
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#2A9DF4",
                      flexWrap: "wrap",
                    }}
                  >
                    {details?.Production}
                    <br />
                    {details?.Writer}
                    <br />
                    {details?.Genre}
                    <br />
                    {details?.Released}
                    <br />
                    {details?.Runtime}
                    <br />
                    {details?.Country}
                    <br />
                    {details?.Language}
                    <br />
                    {details?.Type}
                    <br />
                    {details?.DVD ? details?.DVD : "N/A"}
                    <br />
                    {details?.BoxOffice ? details?.BoxOffice : "N/A"}
                    <br />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#e5e5e5",
                    width: "260px",
                    height: "175px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: "20px",
                  }}
                >
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "35px",
                        width: "260px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        backgroundColor: "#b3cde0",
                        paddingLeft: "20px",
                      }}
                    >
                      Actors
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                      }}
                    >
                      {details?.Actors?.toString()
                        .split(",")
                        .map((val) => (
                          <div
                            style={{
                              paddingTop: "5px",
                              fontWeight: "bold",
                              color: "#2A9DF4",
                            }}
                          >
                            {val}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#e5e5e5",
                    width: "300px",
                    height: "175px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: "20px",
                  }}
                >
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "35px",
                        width: "300px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        backgroundColor: "#b3cde0",
                        paddingLeft: "20px",
                      }}
                    >
                      Rating
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {details?.Ratings?.map((val) => (
                          <div
                            style={{paddingTop: "5px", fontWeight: "bold"}}
                            key={val.Source}
                          >
                            {val.Source} :
                          </div>
                        ))}
                        <div style={{paddingTop: "5px", fontWeight: "bold"}}>
                          imdb Votes :
                        </div>
                      </div>
                      <div>
                        {details?.Ratings?.map((val) => (
                          <div
                            style={{
                              paddingTop: "5px",
                              fontWeight: "bold",
                              color: "#2A9DF4",
                            }}
                            key={val.Source}
                          >
                            {val.Value}
                          </div>
                        ))}
                        <div
                          style={{
                            paddingTop: "5px",
                            fontWeight: "bold",
                            color: "#2A9DF4",
                            paddingRight: "10px",
                          }}
                        >
                          {details?.imdbVotes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#e5e5e5",
                    width: "300px",
                    height: "175px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "35px",
                        width: "300px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        backgroundColor: "#b3cde0",
                        paddingLeft: "20px",
                      }}
                    >
                      Awards
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            paddingTop: "5px",
                            paddingRight: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          {details?.Awards}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "10px",
                  backgroundColor: "#e5e5e5",
                  width: "900px",
                  height: "125px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{display: "flex", flexDirection: "column"}}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "35px",
                      width: "900px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      backgroundColor: "#b3cde0",
                      paddingLeft: "20px",
                    }}
                  >
                    Plot
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingLeft: "20px",
                      paddingRight: "15px",
                      paddingTop: "10px",
                      fontSize: "18px",
                    }}
                  >
                    {details?.Plot}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
