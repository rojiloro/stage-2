import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import  Image  from "react-bootstrap/Image";

import FormLogin from "./Components/FormLogin";


// routes
import Home from "./Pages/Home";
import FormRegister from "./Components/FormRegister";

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="/assets/img/Land Tick.png"/>
              <Image src="/assets/img/train-facing-right 1.png"/>
            </Link>
            {/* <img src=""></img> */}
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <FormLogin />
            </Nav.Link>
            <Nav.Link><FormRegister/></Nav.Link>
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
