import { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Modal } from "react-bootstrap";

import cssModules from "../css/Admin.module.css";

function TableAdmin(props) {
  const [show, setShow] = useState(false);

  const handleShowOpen = () => setShow(true);
  const handleShowClose = () => setShow(false);
  return (
    <>
      <Row>
        <Col m={2}>
          <p>{props.No}</p>
        </Col>
        <Col s={2}>
          <p>{props.Users}</p>
        </Col>
        <Col s={2}>
          <p>{props.Tiket}</p>
        </Col>
        <Col s={2}>
          <p>{props.BuktiTransfer}</p>
        </Col>
        <Col s={2}>
          <p>{props.Status}</p>
        </Col>
        <Col s={2}>
          <Row>
            <div style={{ cursor: "pointer", display: "flex" }}>
              <Col xs={4}>
                <Image src="../assets/img/search 1.png" onClick={handleShowOpen} />
              </Col>
              <Col xs={4}>
                <Image src="../assets/img/edit.png" />
              </Col>
              <Col xs={4}>
                <Image src="../assets/img/trash 1.png" />
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <hr></hr>
      <Modal show={show} onHide={handleShowClose}>
        <Container>
          <div className={cssModules.shape}>
            <Image src="../assets/img/Land Tick.png" />
            <Image src="../assets/img/train-facing-right 2.png" />
          </div>
          <button style = {{float: "right", position: "relative", top: "-2rem"}} className="btn-close" onClick={handleShowClose}></button>

          <div>
            <p style={{fontWeight: "bold", fontSize:"2.25rem"}}>INVOICE</p>
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default TableAdmin;
