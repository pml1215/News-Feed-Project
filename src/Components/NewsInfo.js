import { Card } from 'react-bootstrap';


function News(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Text>
          {props.url}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default News;
