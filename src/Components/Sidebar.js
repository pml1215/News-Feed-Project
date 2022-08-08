import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdSportsSoccer, MdBusinessCenter, MdOutlineScience } from "react-icons/md";
import { TbMovie } from 'react-icons/tb';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoHomeOutline } from "react-icons/io5";


function Sidebar(props) {
    return (
        <div className={props.show ? "sidenav active sticky-left" : "sidenav" }>
            <Nav>
                <LinkContainer to={"/"}>
                    <Nav.Link>
                        <IoHomeOutline size={25} />Home
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Sports"}>
                    <Nav.Link>
                        <MdSportsSoccer size={25} />Sports
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Business"}>
                    <Nav.Link>
                        <MdBusinessCenter size={25} />Business
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/Entertainment"}>
                    <Nav.Link>
                        <TbMovie size={25} />Entertainment
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/ScienceAndTechnology"}>
                    <Nav.Link>
                        <MdOutlineScience size={25} />ScienceAndTechnology
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/news/World"}>
                    <Nav.Link>
                        <BiWorld size={25} />World
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/About"}>
                    <Nav.Link>
                        <AiOutlineQuestionCircle size={25} />About
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    );
}

export default Sidebar;