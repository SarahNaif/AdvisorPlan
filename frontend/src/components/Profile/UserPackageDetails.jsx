import { React, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Dropdown, NavDropdown, Modal, Row, Col, Container } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';


const Button = styled.button`
color: white;
background-color:rgb(0, 136, 204);
font-weight:800;
font-size: 1em;
margin: 1em;
padding: 0.25em 2em;
border: 3px solid rgb(0, 136, 204);
border-radius: 20px;


`;

export default function UserPackageDetails({ PackageInfo ,status}) {

    // console.log("PackageInfo form UserPackageDetails", PackageInfo)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} >
                Detailes
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title> {PackageInfo.title} Package </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Container style={{ padding: "30px" }}>
                        <Row>
                        {PackageInfo.decription}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, itaque quibusdam? Est cupiditate maiores praesentium! Sit possimus sapiente eum culpa eius, tempora rerum. Tempora nam architecto ea magnam repellat illo?
                        <br/><br/><br/>
                        Number Of Meeting : {PackageInfo.NumOfMeeting}
                        </Row>
                        {status == 0 &&
                            <Row className="m-2 p-2">
                                <Col xs={6} md={4} >
                                    Book appointment for
                            </Col>
                            
                                <Col xs={6} md={4}>
                                
                                    <Button
                                        as={Link}
                                        to={`/services/${PackageInfo.NumOfMeeting}/consultation/new`}
                                    >
                                        CONSULTATION 
                                    </Button>
                                        </Col>
                                        <Col xs={6} md={4}>
                                        {PackageInfo.title != 'Consultation ONLY' &&  <Button
                                        as={Link}
                                        to={`/services/${PackageInfo.NumOfMeeting}/FeasibilityStudy/new`}
                                    >
                                        FEASIBILITYSTUDY </Button>}
                                </Col>
                            </Row>
                        }
                    </Container>
                </Modal.Body>
                <Modal.Footer>


                    <Button variant="primary"
                        onClick={() => { setShow(false) }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

