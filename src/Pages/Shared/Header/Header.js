import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
import Logo from "../../../images/Logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              alt=""
              width="60"
              height="60"
              className="mx-auto my-auto"
            />{" "}
            <strong className="ms-3">Traip Travel And Tour Booking</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              <button>Home</button>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/About">
              <button>About</button>
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              <button>Package</button>
            </Nav.Link>
            {user.email && (
              <Nav.Link as={HashLink} to="/addService">
                <button>Add Package</button>
              </Nav.Link>
            )}
            {user.email && (
              <Nav.Link as={HashLink} to="/manageServices">
                <button>Manage Package</button>
              </Nav.Link>
            )}
            <Nav.Link as={HashLink} to="/Contact">
              <button>Contact</button>
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout{" "}
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <button>Login</button>
              </Nav.Link>
            )}
            <Navbar.Text>
              <a href="#login" className="userName">
                {user?.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
