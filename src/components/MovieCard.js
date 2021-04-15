import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import PosterModal from "./PosterModal";

const MovieCard = ({image, name, id, type, year}) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      minWidth: 400,
    },
  });

  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const toggle = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "25px",
      }}
    >
      <PosterModal
        image={image}
        title={name}
        open={openModal}
        toggle={toggle}
      />
      <Card className={classes.root}>
        <CardActionArea
          style={{display: "flex", justifyContent: "space-between"}}
        >
          <div style={{display: "flex"}}>
            <img
              src={image}
              alt={name}
              onClick={toggle}
              style={{height: "200px", width: "135px"}}
            />
          </div>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography gutterBottom variant="h5" component="h2">
              <p style={{textAlign: "right"}}>
                [{year}] <br /> {name}
              </p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", justifyContent: "flex-end"}}>
          <Link to={`/movie-detail?id=${id}`} style={{textDecoration: "none"}}>
            <Button
              size="medium"
              style={{backgroundColor: "#2a9df4", color: "whitesmoke"}}
            >
              Detail
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieCard;
