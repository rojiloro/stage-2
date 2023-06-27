// import bootstrap
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";

import cssModules from "./Form.module.css";

function FormRegister() {
  const [tampil, setTampil] = useState(false);

  const handleClose = () => setTampil(false);
  const handleShow = () => setTampil(true);

  return (
    <div>
      <Button className={cssModules.btnRegister} onClick={handleShow}>
        Register
      </Button>

      <Modal show={tampil} onHide={handleClose}>
        <Container>
          <form className="text-center mb-5">
            <div>
              <h1 className={cssModules.h1}>Daftar</h1>
              <input type="text" placeholder="Nama Lengkap" className={cssModules.Input} />
              <input type="text" placeholder="Username" className={cssModules.Input} />
              <input type="email" placeholder="Email" className={cssModules.Input} />
              <input type="password" placeholder="Password" className={cssModules.Input} />
              

              <button className={cssModules.btn}>Daftar</button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

export default FormRegister;
