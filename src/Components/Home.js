import { Container, Row, Col} from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';

function Home() {
    return (
      <Container className="me-5 mt-5 w-100 ">
        <Row>
          <Col>
            <h2>CPAN 144 - Project</h2>
            <p>Brief Introduction</p>
          </Col>
          <Col xl={9} >
            <CarouselFetch />
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;