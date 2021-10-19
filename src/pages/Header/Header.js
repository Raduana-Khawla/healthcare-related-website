import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";
import './Header.css';

const Header = () => {
  const {user,logOut} = useAuth()||{};
//    console.log(user);
    return(
       <div className="me-5">
            <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <div className="d-flex">
    <img className="d-inline-block align-top rounded-circle"
          src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/126959781_825855454915411_753369467968966823_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8ChPTA6sqWIAX9-bF3s&_nc_ht=scontent.fdac27-1.fna&oh=496152b27eaefaca51d8e89d7692ff7e&oe=61915807"
      alt="First slide"
          width="100"
          height="80"
        />{' '}
    <span className="design">Family Care Dental Zone</span>
    </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
        <Nav.Link as={HashLink} to="/news">News</Nav.Link>
        {user?.email ?
        <button onClick={logOut} variant="light">Logout</button>
        :<Nav.Link as={Link} to="/login">Login</Nav.Link>}
        <Nav.Link as={HashLink} to="/notFound">NotFound</Nav.Link>
        <Navbar.Text> Signed in as: <a href="#login">{user?.displayName}</a> </Navbar.Text> 
     </Navbar.Collapse>
    </Container>
  </Navbar>
       </div>
    );
};

export default Header;