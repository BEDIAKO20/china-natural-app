import React from 'react'
import { Navbar,Container,Button ,Nav,Form} from 'react-bootstrap';
import medical from  "../../img/medical-care.png";
import  {Link} from 'react-router-dom'

const DoctorNav = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg"  className='navbar-custom'>
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
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" as={Link}  to={"/labDoctor"}  style={{color: "white"}} className="doctornav">Laboratory</Nav.Link>
            <Nav.Link href="#action2"  as={Link} to={"/phaDoctor"} style={{color: "white"}}  className="doctornav">Pharmacy</Nav.Link>
            {/* <Nav.Link href="#action1" style={{color: "white"}}  className="doctornav">Home</Nav.Link>
            <Nav.Link href="#action2" style={{color: "whitez"}}  className="doctornav">Link</Nav.Link> */}
    
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

export default DoctorNav