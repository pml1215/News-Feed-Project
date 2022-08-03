import { Container, Row, Col} from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';
import FetchTrending from './FetchTrending';
import GetDate from './getDate';

function Home() {
    return (
      <Container className="mt-5 w-100 ">
        <Row>
            <GetDate />

            <CarouselFetch />
        </Row>       

      </Container>

    );
  }

export default Home;