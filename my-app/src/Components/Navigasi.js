import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import cssModules from "../css/Navbar.module.css";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

import Home from "../Pages/Home";
import Cetak from "../Pages/Cetak";
import Invoice from "../Pages/Invoice";
import { Button } from "react-bootstrap";

function Navigasi() {
  return (
    <>
      <Navbar className={cssModules.navbar}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="../assets/img/Land Tick1.png" />
              <Image src="../assets/img/train-facing-right 1.png" />
            </Link>
            <Link to="/invoice">
              <Button variant="success">cetak invoice</Button>
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <FormLogin />
            </Nav.Link>
            <Nav.Link>
              <FormRegister />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cetak" element={<Cetak />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </>
  );
}

export default Navigasi;
