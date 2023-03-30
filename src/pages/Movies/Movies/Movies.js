import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Spinner from "../../../components/Spinner/Spinner";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  if (movies.length === 0) {
    return (
      <div className="text-center my-5">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div className="my-5">
      <Container>
        <Row xs={1} md={3} className="gx-4">
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie}></MovieCard>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
