import React from 'react'
import { Card,Container,ListGroup } from 'react-bootstrap';
import Navbars from '../Navbar/Navbar';
import   "./LabDoctor.css"

function LabDoctor() {
  return (
    <div>
           <Navbars/>
           <Container>
           <Card >
           <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
        <label className="container">
    <input checked="checked" type="checkbox"/>
    <div className="checkmark"></div>
</label>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
           </Card>
           </Container>
          
    </div>
  )
}

export default LabDoctor