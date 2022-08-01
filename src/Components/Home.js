import { Container, Row, Col} from 'react-bootstrap';
import CarouselFetch from './CarouselFetch';
import GetDate from './getDate';

function Home() {
    return (
      <Container className="mt-5 w-100 ">
        <Row>
          <Col xl={3} >
            <GetDate />
            <h2>CPAN 144 - <br/>News Feed App</h2>
            <p>This app is a news feed app that fetches news from Microsoft Bing</p>
            <p>produced by:</p>
            <ul>
              <li>Chi Lam Yim</li>
              <li>Ka Yan Lui</li>
              <li>Ming Lok Pun</li>
            </ul>
          </Col>
          <Col xl={9} >
            <CarouselFetch />
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;