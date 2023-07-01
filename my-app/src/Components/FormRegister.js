// import bootstrap

import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Modal } from "react-bootstrap/";

import cssModules from "../css/RegisterLogin.module.css";

export default function FormRegister() {
  const [tampil, setTampil] = useState(false);

  const handleClose = () => setTampil(false);
  const handleShow = () => setTampil(true);

  return (
    <div>
      <Button className={cssModules.btnRegister} onClick={handleShow}>
        Register
      </Button>

      <Modal show={tampil} onHide={handleClose}>
        <Container className={cssModules.container}>
          <form className="text-center mb-5">
            <div className={cssModules.scroll}>
              <h1 className={cssModules.h1}>Daftar</h1>
              <input type="text" placeholder="Nama Lengkap" className={cssModules.Input} />
              <input type="text" placeholder="Username" className={cssModules.Input} />
              <input type="email" placeholder="Email" className={cssModules.Input} />
              <input type="password" placeholder="Password" className={cssModules.Input} />
              <select className={cssModules.Input}>
                <option selected="selected" disabled>
                  Jenis Kelamin{" "}
                </option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
              <input type="number" placeholder="Telp" className={cssModules.Input} />
              <textarea className={cssModules.textarea} placeholder="Alamat"></textarea>
              <button className={cssModules.btn}>Daftar</button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
}

// link export
// export function LinkRegister() {
//   const [tampil, setTampil] = useState(false);

//   const handleClose = () => setTampil(false);
//   const handleShow = () => setTampil(true);

//   return (
//     <div>
//       <b className={cssModules.b} onClick={handleShow}>
//         Klik Disini
//       </b>

//       <Modal show={tampil} onHide={handleClose}>
//         <Container className={cssModules.container}>
//           <form className="text-center mb-5">
//             <div className={cssModules.scroll}>
//               <h1 className={cssModules.h1}>Daftar</h1>
//               <input type="text" placeholder="Nama Lengkap" className={cssModules.Input} />
//               <input type="text" placeholder="Username" className={cssModules.Input} />
//               <input type="email" placeholder="Email" className={cssModules.Input} />
//               <input type="password" placeholder="Password" className={cssModules.Input} />
//               <select className={cssModules.Input}>
//                 <option selected="selected" disabled>
//                   Jenis Kelamin{" "}
//                 </option>
//                 <option>Laki-laki</option>
//                 <option>Perempuan</option>
//               </select>
//               <input type="number" placeholder="Telp" className={cssModules.Input} />
//               <textarea className={cssModules.textarea} placeholder="Alamat"></textarea>
//               <button className={cssModules.btn}>Daftar</button>
//             </div>
//           </form>
//         </Container>
//       </Modal>
//     </div>
//   );
// }
