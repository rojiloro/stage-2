import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import cssModules from "../Components/Form.module.css";

function Rute(props) {
  return (
    <>
      <Container className={cssModules.ruteContainer}>
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
