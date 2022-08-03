import { Container,Form, Button } from 'react-bootstrap';

function SearchBar() {
    return (
        <Container className="centered">
        <Form className="d-flex">
            <Form.Control
            style={{
                backgroundColor:"#F5F5F5",
                padding: "10px",
                borderRadius: "15px",
                fontSize:"15px",
                width:"200%",
            }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button 
            style={{
                backgroundColor:"black",
                padding: "8px",
                width:"50%",
                borderRadius: "35px",
                fontSize:"15px",

            }}>Search</Button>
        </Form>
        </Container>
    );
}

export default SearchBar;