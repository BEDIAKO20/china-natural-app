import React from 'react'
import { Navbar,Container,Button,Form,Nav } from 'react-bootstrap';
import medical from  "../../img/medical-care.png"
function Navbars() {
  return (
    <div>
          <Navbar bg="light"  expand="lg" className='navbar-custom'>
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src={medical}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbars