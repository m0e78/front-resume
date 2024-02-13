import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
const Navbarr = () => {
    return (<>
        <Navbar expand="lg" className='navbar1'>
            <Container>
                <Navbar.Brand href="/">E-SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/productlist">In Stock</Nav.Link>
                        <Nav.Link href="/orderlist">Order</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    </>
    )
}

export default Navbarr