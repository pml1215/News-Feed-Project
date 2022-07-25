import { Card,Col } from 'react-bootstrap';


function News(props) {
  return (
      <Col xs={{span:5,offset:5}} className="mt-4 w-50">
      <Card>
      <Card.Header>{props.category}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <a href={props.url} className="stretched-link">{props.url}</a>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default News;
