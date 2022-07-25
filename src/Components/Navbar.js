import Home from './Home';
import Content from './Content';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function NavbarComp() {
    return (
      <BrowserRouter>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container className="ms-5">
            <LinkContainer to={"/"}>
              <Navbar.Brand>News Feed</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={"/"}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/world"}>
                  <Nav.Link>World</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/sport"}>
                  <Nav.Link>Sports</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/music"}>
                  <Nav.Link>Music</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/business"}>
                  <Nav.Link>Business</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/technology"}>
                  <Nav.Link>Technology</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/science"}>
                  <Nav.Link>Science</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:category" element={<Content/>} />
        </Routes>
  
      </BrowserRouter>
    )
  }

  export default NavbarComp;