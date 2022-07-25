import { Container, Row, Col} from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';

function Home() {
    return (
      <Container fluid="md" className="mt-5">
        <Row sm={1} lg={2}>
          <Col xl={3} >
            <h2>CPAN 144 - Project</h2>
            <p>Brief Introduction</p>
          </Col>
          <Col xl={9}>
            <CarouselFetch />
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;