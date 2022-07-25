import { Container,Form, Button } from 'react-bootstrap';

function SearchBar() {
    return (
        <Container className="pt-4">
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Container>
    );
}

export default SearchBar;