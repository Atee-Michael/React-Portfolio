import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";



function Header() {
  return (
    <main>
      <br></br>
      <Navbar className="navbarMain navbarContainer" bg="light" expand="lg">
        <Container fluid> {/* Add fluid property here */}
          <Navbar.Brand className="brand" href="/About">
            <strong>Michael Atee</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className ="customNav" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/About">About Me</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown" className="my-dropdown">
                <NavDropdown.Item href="/Bootcamp">Bootcamp</NavDropdown.Item>
                <NavDropdown.Item href="/Personal">Personal</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Commercial">
                  Commercial
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#Contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </main>
  );
}

export default Header;
