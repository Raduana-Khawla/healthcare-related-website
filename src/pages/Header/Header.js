import React from "react";
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";


const Header = () => {
  const {user,logOut} = useAuth()||{};
   console.log(user);
    return(
    <>
        <Navbar  bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <img
          src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/126959781_825855454915411_753369467968966823_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8ChPTA6sqWIAX9-bF3s&_nc_ht=scontent.fdac27-1.fna&oh=496152b27eaefaca51d8e89d7692ff7e&oe=61915807"
      alt="First slide"
          width="50"
          height="50"
          className="d-inline-block align-top circle"
        />{' '}
    Family Care Dental Zone</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#news">News</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#notFound">NotFound</Nav.Link>
                        
                        {user?.email ?
                           <button onClick={logOut} variant="light">Logout</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.name}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
    );
};

export default Header;