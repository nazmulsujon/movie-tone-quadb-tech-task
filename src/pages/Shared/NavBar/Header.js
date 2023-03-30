import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="fs-4 fw-bolder">
          Movie<span>Tone</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <NavLink className="text-light text-decoration-none mx-2" to="/">
                Home
              </NavLink>
              <NavLink className="text-light text-decoration-none mx-2" to="/movies">
                Movies
              </NavLink>
              {user?.uid ? (
                ""
              ) : (
                <>
                  <NavLink className="text-light text-decoration-none mx-2" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="text-light text-decoration-none mx-2" to="/register">
                    Register
                  </NavLink>
                </>
              )}
            </div>
            {user?.uid ? (
              <div>
                <NavLink className="text-light text-decoration-none mx-2 ">
                  <Button onClick={handleLogOut} className="btn btn-dark">
                    Logout
                  </Button>
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
