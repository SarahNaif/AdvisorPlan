import { React, useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, NavDropdown, Modal } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";


export default function LoginAlert() {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button
                onClick={handleShow}
            >
                pay
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> you need to be login befor pay</Modal.Title>
                </Modal.Header>
                <Modal.Body>  if you do not have account yet <Link to={'/signup'}> signup </Link>   </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => {
                            history.push("/login");
                            setShow(false)
                        }}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
