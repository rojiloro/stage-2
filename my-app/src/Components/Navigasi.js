import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState } from "react";

import cssModules from "../css/Navbar.module.css";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
// import Admin from "../Pages/Admin";
import { Button } from "react-bootstrap";

function Navigasi(props) {
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowDaftar, setShowDaftar] = useState(false);

  return (
    <>
      <Navbar className={cssModules.navbar}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="../assets/img/Land Tick1.png" />
              <Image src="../assets/img/train-facing-right 1.png" />
            </Link>
            <Link to="/admin">
              <Button variant="danger">Admin</Button>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Button className={cssModules.btnLogin} onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button className={cssModules.btnRegister} onClick={() => setShowDaftar(true)}>
                Register
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <FormLogin show={ShowLogin} showLogin={setShowLogin} showDaftar={setShowDaftar} />
      <FormRegister show={ShowDaftar} showDaftar={setShowDaftar} />
    </>
  );
}

export default Navigasi;
