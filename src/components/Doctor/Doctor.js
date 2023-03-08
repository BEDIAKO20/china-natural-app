import React from 'react'
import { Container, Form, Row, Col  } from 'react-bootstrap'

import  "./Doctor.css"

import plan from "../../img/task.png";
import DoctorNav from './DoctorNav';

function Doctor() {
  return (
    <div className='doctor'>
      <DoctorNav/>

      <Container>
        <Form>
          <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PC(Patient Complains)</Form.Label>
        <Form.Control type="text" placeholder="Patient Complains"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>HPC(History of patient complains</Form.Label>
        <Form.Control type="text" placeholder="HP"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ODQ(Ondirected Questions)</Form.Label>
        <Form.Control type="text" placeholder="ODQ"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SR(Systemic RE)</Form.Label>
        <Form.Control type="text" placeholder="SR"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PMH(medical History)</Form.Label>
        <Form.Control type="text" placeholder="Enter email"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DH(Drug History)</Form.Label>
        <Form.Control type="text" placeholder="DH"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FH(Family History)</Form.Label>
        <Form.Control type="text" placeholder="FH"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SH(Social History)</Form.Label>
        <Form.Control type="text" placeholder="SH"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>O&E(Observcetion & Evaluction)</Form.Label>
        <Form.Control type="text" placeholder="O&E"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Chest(Respiratory System)</Form.Label>
        <Form.Control type="text" placeholder="Chest(Respiratory System)"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ABD(Abotominal)</Form.Label>
        <Form.Control type="text" placeholder="Abotominal"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CNS(central Nervous System)</Form.Label>
        <Form.Control type="text" placeholder="Enter email"   className=" p-4"  />
      </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>IMP(IMprassion)</Form.Label>
        <Form.Control type="text" placeholder="IMP(Imprassion)"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CNS(central Nervous System)</Form.Label>
        <Form.Control type="text" placeholder="CNS(central Nervous System)"   className=" p-4"  />
      </Form.Group>
            </Col>
          </Row>

          <Row>
         <div className='mine-plan'>
         <h1 className='plan-h fw-bold'>PLAN
          <img src={plan}   className="plan-coe"
              alt="React Bootstrap logo"
              />
          </h1>
         </div>
        
         <Col md={12}>
            <textarea className='Text-box'>

            </textarea>


            </Col>


            <button className="Dbtn">
    <span className="btn-text-one">Submit</span>
    <span className="btn-text-two">Great!</span>
</button>

           
          </Row>

        </Form>


      </Container>

    </div>
  )
}

export default Doctor