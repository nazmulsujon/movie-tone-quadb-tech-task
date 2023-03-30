import React, { useContext, useState } from "react";
import { Button, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import "./Register.css";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        form.reset();
        setError("");
      })
      .catch((err) => {
        // console.error(err);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <div className="shadow px-3 py-4 my-5 rounded form-width mx-auto">
        <h4 className="text-dark text-center">Please Register Now</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text className="text-danger">{error ? error : ""}</Form.Text>
          </Form.Group>
          <div className="w-50 mx-auto">
            <Button className="px-5 mb-3 fw-semibold w-100" variant="primary" type="submit">
              Register
            </Button>
            <p>
              Already have account? please
              <Link to="/login" className="text-decoration-none ms-1">
                Login
              </Link>
            </p>
          </div>
        </Form>
        <Row className="mt-4 w-50 mx-auto ">
          <Button onClick={handleGoogleSignIn} className="fw-semibold" variant="outline-primary">
            <span className="d-flex align-items-center justify-content-center">
              <FaGoogle className="me-2 fw-semibold fs-5" />
              <span>Continue with Google </span>
            </span>
          </Button>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
