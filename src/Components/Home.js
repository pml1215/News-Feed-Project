import { Container, Row, Col} from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';

function Home() {
    return (
      <Container className="mt-5 w-100">
        <Row sm={1} lg={4}>
          <Col xl={3} >
            <h2>CPAN 144 - Project</h2>
            <p>Brief Introduction</p>
          </Col>
          <Col xl={9}>
            <h2>Top headlines in Canada</h2>
            <CarouselFetch />
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;