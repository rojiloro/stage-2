import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import FormLogin from "./Components/FormLogin";

// routes
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">Land Tick</Link>
            {/* <img src=""></img> */}
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <FormLogin />
            </Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
