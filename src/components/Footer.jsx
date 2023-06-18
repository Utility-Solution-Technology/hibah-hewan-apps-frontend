import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar className="mt-5" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Adoption Animal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright @2023: <a href="#login" className="text-decoration-none">All right reserved</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;