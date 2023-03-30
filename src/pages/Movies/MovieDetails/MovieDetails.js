import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Button from "react-bootstrap/Button";
import BookingTicketModal from "../../../components/BookingTicketModal/BookingTicketModal";
import Spinner from "../../../components/Spinner/Spinner";

const MovieDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();
  const movieData = location.state?.movieData;
  //   const { name, language, premiered, image, averageRuntime, rating, id } = movieData;
  const originalImage = movieData?.image?.original;
  //   console.log(movieData);
  if (movieData === null) {
    return (
      <div className="text-center my-5">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <Container className="my-5 d-md-flex">
      <Fade left>
        <div className="details-page-img-div">
          <img
            src={originalImage}
            alt="movieImg"
            className="rounded-1 me-5"
            style={{ height: "450px", width: "55vw" }}
          />
        </div>
      </Fade>

      <Fade right>
        <div>
          <div className="text-start fw-light">
            <h2>{movieData?.name ? movieData?.name : "not found"}</h2>
            <p>Language: {movieData?.language ? movieData?.language : "not found"}</p>
            <p>Published: {movieData?.premiered ? movieData?.premiered : "not found"}</p>
            <p>Runtime: {movieData?.averageRuntime ? movieData?.averageRuntime + " min" : "not found"}</p>
            <p>Ratings: {movieData?.rating?.average ? movieData?.rating?.average + " star" : "not found"}</p>
            <p>{movieData?.summary ? movieData?.summary.replace(/<\/?p>/g, "") : "not found"}</p>
            <br />

            <Button variant="dark" onClick={() => setModalShow(true)}>
              Book Ticket
            </Button>
            <BookingTicketModal
              movieData={movieData}
              show={modalShow}
              onHide={() => setModalShow(false)}
            ></BookingTicketModal>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

export default MovieDetails;
