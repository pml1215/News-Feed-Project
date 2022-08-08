import { Container, Row } from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';
import FetchTrending from './FetchTrending';
import GetDate from './getDate';

function Home(props) {
    return (
      <Container className={props.show?"home active":"home"}>
        <Row>
            <GetDate />
            <CarouselFetch />
        </Row>       
            <div className='cardgroup'>
              <h3>Trending</h3>
              <FetchTrending />
            </div>
      </Container>

    );
  }

export default Home;