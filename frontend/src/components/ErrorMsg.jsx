import { React, useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, NavDropdown,Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function ErrorMsg({}) {

  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

                  {/* <Form.Group className=" col-lg-12 mx-auto mb-0">
                      <Link 
                      href="#" 
                      className="btn rounded-pill  btn-block py-2" 
                      style={{ backgroundColor: 'rgb(0, 136, 204)', color: "white" }}>
                        <Form.Text 
                        className="font-weight-bold" 
                        type="submit" onClick={(e) => onSubmit(e)} >
                        Create your account</Form.Text>
                      </Link>
                  </Form.Group> */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            ok
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}
