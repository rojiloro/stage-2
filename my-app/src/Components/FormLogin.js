// import bootstrap
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
// import { useAuth } from "../Context/AuthContext";

import cssModules from "../css/RegisterLogin.module.css";

function FormLogin({ show, showLogin, showDaftar }){
  const handleClose = () => showLogin(false);

  const SwitchKlik = () => {
    handleClose();
    showDaftar(true);
  };

  // authentikasi
  // const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  // const logIn = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(true);
  //   setAuthUser({
  //     Name: "Oji",
  //   });
  
  //   const logOut = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(false);
  //   setAuthUser(null);
  // };

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
