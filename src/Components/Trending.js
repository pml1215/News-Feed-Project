import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Trending(props) {
  if (!props.image) {
    return (
      <div className='trending'>
        <Row xs={1} md={2} lg={3} className="g-4" >
         
            <Col >
              <Card border="primary" className="cards">
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" />
                <Card.Body style={{ margin: "5px" }}>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Button href={props.url} variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
       
        </Row>
      </div>
    );
  } else {
    return (
      <div className='trending'>
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
            <Col>
              <Card border="primary" className="cards">
                <Card.Img variant="top" src={props.image} />
                <Card.Body style={{ margin: "5px" }}>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>
                    <h6>{props.date}</h6>
                  </Card.Text>
                  <Button href={props.url} variant="primary">Read more</Button>
                </Card.Body>
              </Card> <br />
            </Col>
          {/* ))} */}

        </Row>
      </div>
    );
  }
}

export default Trending;
