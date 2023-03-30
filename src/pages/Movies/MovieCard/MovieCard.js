import React from "react";
import { Card } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const movieData = movie?.show;
  const { name, language, premiered, image, averageRuntime, rating, id } = movie?.show;
  const originalImage = image?.original
    ? image?.original
    : "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg";

  const handleNavigate = () => {
    navigate(`/movieDetails/${id}`, { state: { movieData } });
  };

  return (
    <Fade bottom>
      <div style={{ margin: "-60px 0" }}>
        <Card className="h-75 mt-5 cursor-pointer hoverStyle" onClick={handleNavigate}>
          <Card.Img variant="top" src={originalImage} className="h-50" />
          <Card.Body>
            <Card.Title className="text-start">{name}</Card.Title>
            <Card.Text className="text-start">
              <span>Language: {language ? language : "not found"}</span> <br />
              <span>Published: {premiered ? premiered : "not found"}</span>
              <br />
              <span>Runtime: {averageRuntime ? averageRuntime + " min" : "not found"}</span>
              <br />
              <span>Ratings: {rating?.average ? rating.average + " star" : "not found"}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Fade>
  );
};

export default MovieCard;
