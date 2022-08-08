import { useState } from 'react';
import { Container, Form} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function SearchBar() {
    const [keywords, setKeywords] = useState("");

    return (
        <Container className="centered">
            <Form className="d-flex">
                <Form.Control
                    style={{
                        backgroundColor: "#F5F5F5",
                        padding: "10px",
                        borderRadius: "15px",
                        fontSize: "15px",
                        width: "85%",
                    }}
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />
                <LinkContainer to={"/Search/" + keywords}>
                    <button className="btn btn-outline-primary" variant="outline-primary">Search</button>
                </LinkContainer>
            </Form>
        </Container>
    );
}

export default SearchBar;