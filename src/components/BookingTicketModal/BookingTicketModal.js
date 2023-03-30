import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingTicketModal = (props) => {
  const { user } = useContext(AuthContext);
  const movieData = props.movieData;
  console.log(movieData, "bookinnnng modal");
  const handleBookingDetails = () => {
    const bookingDetails = {
      userName: user?.displayName,
      userEmail: user?.email,
      movieName: movieData?.name,
      movieLanguage: movieData?.language,
    };
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    toast.success("Booked Ticket Successfully!");
    props.onHide();
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <div>
          <h6>Name: {user?.displayName}</h6>
          <h6>Email: {user?.email}</h6>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">Movie: {movieData?.name}</Modal.Title>

        <p>Language: {movieData?.language ? movieData?.language : "not found"}</p>
        <p>Published: {movieData?.premiered ? movieData?.premiered : "not found"}</p>
        <p>Ratings: {movieData?.rating?.average ? movieData?.rating?.average + " star" : "not found"}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleBookingDetails}>
          Confirm Booking
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingTicketModal;
