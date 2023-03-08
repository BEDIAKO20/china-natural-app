import React from 'react';
import "./Nurse.css";

import Navbars from '../Navbar/Navbar';
import { Container, Row,Col, Form,Button,Card } from 'react-bootstrap';


function Nurse() {
  return (
    <div>
      <Navbars/>

    
    <Container className='nurse-box'>
    <Card body>
      <div className='cous-box'>
        <h3>customerName:</h3>
        <button className='box-r'>
    Records
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
</button>
        
      </div>
      
      
      
      <Row className='box-nurse'>
        <Col md={6} >
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>BP-(Blood Pressure)</Form.Label>
        <Form.Control type="number" placeholder="Blood pressure" />
      
      </Form.Group>

          </Form>
        </Col>
        <Col md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pulse</Form.Label>
        <Form.Control type="number" placeholder="Pulse" />
      </Form.Group>

          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={6} >
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Temp(Temperature)</Form.Label>
        <Form.Control type="number" placeholder="Temperature" />
      </Form.Group>

          </Form>
        </Col>
        <Col md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wt(weight)</Form.Label>
        <Form.Control type="number" placeholder="weight" />
      </Form.Group>

          </Form>
        </Col>
        <Button variant="warning" className='fw-bold'>submit</Button>
      </Row>
      </Card>

    </Container>



    </div>
  )
}

export default Nurse