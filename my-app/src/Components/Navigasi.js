import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useState, useContext } from "react";

import cssModules from "../css/Navbar.module.css";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { UserContext } from "../Context/UserContext";

import { Button } from "react-bootstrap";

function Navigasi(props) {
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowDaftar, setShowDaftar] = useState(false);

  // kondisi logout
  const [state, dispatch] = useContext(UserContext);
  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <Navbar className={cssModules.navbar}>
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="../assets/img/Land Tick1.png" />
              <Image src="../assets/img/train-facing-right 1.png" />
            </Link>
          </Navbar.Brand>
          <Nav>
            {/* kondisi login admin dan user */}
            <>
              {state.status ? (
                <>
                  <p>{state.user}</p>
                  <Link to={"/"}>
                    <Button variant="danger" onClick={logout}>
                      Log out
                    </Button>
                  </Link>
                </>
              ) : state.isLogin ? (
                <>
                  <p>{state.user}</p>
                  <Link to={"/"}>
                    <Button variant="danger" onClick={logout}>
                      Log out
                    </Button>
                  </Link>
                </>
              ) : (
                <>
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
                </>
              )}
            </>
          </Nav>
        </Container>
      </Navbar>
      <FormLogin show={ShowLogin} showLogin={setShowLogin} showDaftar={setShowDaftar} />
      <FormRegister show={ShowDaftar} showDaftar={setShowDaftar} />
    </>
  );
}

export default Navigasi;
