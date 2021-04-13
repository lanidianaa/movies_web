import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import PosterModal from "./PosterModal";

const MovieCard = ({image, name, id, type, year}) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      minWidth: 500,
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
              style={{height: "200px"}}
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
              {name} [{year}]
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", paddingLeft: "400px"}}>
          <Link to={`/movie-detail?id=${id}`}>
            <Button
              size="normal"
              style={{outline: 0, backgroundColor: "blue", color: "whitesmoke"}}
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
