import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Footer() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="footer">
      <Navbar className="mt-5 py-5" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle />
          <div className="d-block text-center d-md-flex justify-content-between align-items-center w-100">
            <div>
              <Navbar.Brand href="/">Abule</Navbar.Brand>
            </div>
            <h6 className="text-secondary m-0">Copyright HumbleDev @2023: <a href="#login" className="text-decoration-none">All right reserved</a></h6>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
