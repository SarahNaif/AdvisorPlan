import { React, useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, NavDropdown,Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SureLogout(props) {
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const history = useHistory();
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

                <NavDropdown.Item
                    href="#action/3.3"
                    onClick={handleShow}
                >
                    logout <i class="fa fa-sign-out m-2" aria-hidden="true"></i>
                </NavDropdown.Item>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LOGOUT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> ARE YOU SURE YOU WANT LOGOUT !!! </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button variant="primary"
                            onClick={() => {
                                console.log("Logging Out!");
                                localStorage.removeItem("jwtToken");
                                localStorage.removeItem("userInfo");
                                props.loginCallback();
                                history.push("/");
                                setShow(false)
                                toast.info('You are logout ', {
                                    position: "top-center",
                                    autoClose: 2,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: 1,
                                    });
                            }}>
                            Yes
            </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}
