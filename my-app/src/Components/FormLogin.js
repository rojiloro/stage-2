// import bootstrap
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import cssModules from "../css/RegisterLogin.module.css";

function FormLogin() {
  const [tampil, setTampil] = useState(false);

  const handleClose = () => setTampil(false);
  const handleShow = () => setTampil(true);
  return (
    <div>
      <Button className={cssModules.btnLogin} onClick={handleShow}>
        Login
      </Button>
      <Modal show={tampil} onHide={handleClose}>
        <Container>
          <form className="text-center mb-5">
            <div>
              <h1 className={cssModules.h1}>LOGIN</h1>
              <input id="username" type="text" placeholder="Username" className={cssModules.Input} required />
              <input id="password" type="password" placeholder="Password" className={cssModules.Input} required />
              <button className={cssModules.btn}>Login</button>
              <p className={cssModules.p}>Belum Punya Akun? Klik Disini</p>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

export default FormLogin;
