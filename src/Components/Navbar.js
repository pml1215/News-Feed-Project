import Home from './Home';
import About from './About';
import Content from './CategoryContent';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Sidebar from './Sidebar';
import {GoThreeBars} from 'react-icons/go';
import SearchBar from './SearchBar';
import SearchContent from './SearchContent';

function NavbarComp() {
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
    <div className="topnavbar sticky-top">
    <div className="headericon">
      <GoThreeBars onClick={()=>setShow(!show)}/>
    </div>
      <LinkContainer to={"/"}>
        <Navbar.Brand className="brandname">
          <img
            src="/logo-BingNews.svg"
            width="190"
            height="100"
            alt="Bing News logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <SearchBar/>
      </div>
      <Sidebar show={show}/>
      <Routes>
      <Route path="/" element={<Home show={show}/>} />
      <Route path="/news/:newsCategory" element={<Content show={show}/>} />
      <Route path="/About" element={<About show={show}/>} />
      <Route path="/Search/:keywords" element={<SearchContent show={show}/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default NavbarComp;