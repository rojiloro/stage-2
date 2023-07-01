import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import cssModules from "../css/Rute.module.css";

function Rute(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <p className="p-4 ">
            Tiket anda berhasil di tambahkan silakan segera melakukan pembayaran
            <Link to="/cetak" style={{ textDecoration: "none", color: "black" }}>
              <b style={{ cursor: "pointer" }}> Klik disini</b>
            </Link>
          </p>
        </Modal>
        <Container className={cssModules.ruteContainer} onClick={handleShow}>
          <Row>
            <Col xs={2}>
              <p className={cssModules.ruteText}>{props.Kereta}</p>
              <p className={cssModules.ruteText2}>{props.Kelas}</p>
            </Col>
            <Col xs={2}>
              <p className={cssModules.ruteText}>{props.Berangkat}</p>
              <p className={cssModules.ruteText2}>{props.Stasiun}</p>
            </Col>
            <Col xs={2}>
              <Image src="../assets/img/Arrow 5.png" className={cssModules.ruteImage} />
            </Col>
            <Col xs={2}>
              <p className={cssModules.ruteTextGeser}>{props.Tiba}</p>
              <p className={cssModules.ruteText2Geser}>{props.Tujuan}</p>
            </Col>
            <Col xs={2}>
              <p className={cssModules.ruteTextGeser}>{props.Durasi}</p>
            </Col>
            <Col s={3}>
              <p className={cssModules.ruteTextGeserPink}>Rp {props.Harga}</p>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Rute;
