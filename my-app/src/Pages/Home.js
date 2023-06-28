import { Container, Row, Col } from "react-bootstrap";
import cssModules from "../Components/Form.module.css";

function Home() {
  return (
    <div className={cssModules.homeJumbotron}>
      <Container>
        <Row>
            <Col>
                <p className={cssModules.homeText}>Selamat Pagi, Ticket Seekers .</p>
                <p className={cssModules.homeTextKedua}>Ingin Pulkam dengan Good Deal ?</p>
                <p className={cssModules.homeTextKedua}>Masuk atau Daftar Sekarang ! !</p>
            </Col>            
            <Col></Col>            
        </Row>
      </Container>
    </div>
  );
}

export default Home;
