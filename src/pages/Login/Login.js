import React, { useContext, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        form.reset();
        setError("");
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
    setError("");
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
        // navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <div className="shadow px-3 py-4 my-5 rounded form-width mx-auto">
        <h4 className="text-dark text-center">Please Login Now</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
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
              Login
            </Button>
            <p>
              New to website? please
              <Link to="/register" className="text-decoration-none ms-1">
                Register
              </Link>
            </p>
          </div>
        </Form>
        <Row className="mt-4 w-50 mx-auto">
          <Button onClick={handleGoogleSignIn} className="fw-semibold px-2 " variant="outline-primary">
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

export default Login;
