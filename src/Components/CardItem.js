import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardItem(props) {
  // console.log(props);
  const img = !props.image ? props.notfoundimage : props.image;

  return (
    <div>
      <Card

        className='cards'
        bg={'light'}
        text={'black'}>
        <Card.Img variant="top" src={img} style={{ objectFit: "contain" }} />

        <Card.Body style={{ margin: "5px" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <h6>{props.text}</h6>
          </Card.Text>
          <Button href={props.url} variant="primary">Read more</Button>
        </Card.Body>
      </Card> <br />
    </div>
  );
}

export default CardItem;
