import React from 'react'
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar() {
    return (

        <div>

            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand>Main Demo </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            {/* <Nav.Link >
                                
                            </Nav.Link> */}



                            <LinkContainer to='/about'>
                                <Nav.Link > About </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/users'>
                                <Nav.Link > Users </Nav.Link>
                            </LinkContainer>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>



    )
}
