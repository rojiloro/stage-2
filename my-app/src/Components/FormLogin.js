// import bootstrap
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import cssModules from "../css/RegisterLogin.module.css";

function FormLogin({ show, showLogin, showDaftar }) {
  const handleClose = () => showLogin(false);

  const SwitchKlik = () => {
    handleClose();
    showDaftar(true);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Container>
          <form className="text-center mb-5">
            <div>
              <h1 className={cssModules.h1}>LOGIN</h1>
              <input id="username" type="text" placeholder="Username" className={cssModules.Input} required />
              <input id="password" type="password" placeholder="Password" className={cssModules.Input} required />
              <button className={cssModules.btn}>Login</button>
              <p className={cssModules.p}>
                Belum Punya Akun?{" "}
                <span className={cssModules.b} onClick={SwitchKlik}>
                  Klik Disini
                </span>
              </p>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

export default FormLogin;
