import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import SideBar from "../components/Profile/SideBar";
import EditProfile from "../components/Profile/EditProfile";
import Appointment from "../components/Profile/Appointment";

import '../Style/profile.css';
import UserPackges from '../components/Profile/UserPackges';


const Section = styled.div`
padding: 10%;
margin-bottom: 5%;
text-align: center;
width:100%;
height:auto;
.p{
    font-size: 1em;
}

`;

export default function Profile({ packages }) {

    const [toggle, setToggle] = useState(<EditProfile />)
    const [highLight, setHighLight] = useState('profile')
    // const [loading, setLoading] = useState(true)
    // 
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const userName = `${userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1)} ${userInfo.lastName.charAt(0).toUpperCase() + userInfo.lastName.slice(1)}`
    const OnClickEdit = (e,s) => {
        setToggle(e)
        setHighLight(s)

        console.log('You clicked me =)', e)
    }

    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',highLight)

    useEffect(() => {

    }, [toggle])

    return (
        <div>
            <Section>
                <Container className="height-100 d-flex align-items-center">
                    <Row className="w-100">
                        <Col sm={4}>
                            <Card className="card text-center">

                                <Col className="py-4 p-2">
                                    <Image src={userInfo.img} rounded width="100" />
                                    <Col className="mt-3 d-flex flex-row justify-content-center">
                                        <h5> {userName}  </h5>
                                        <span className="dots">
                                            <li className="fa fa-user"></li>
                                        </span>
                                    </Col>
                                    <span>@{userInfo.username}</span>
                                </Col>
                                <ListGroup as="ul" className="list-unstyled list"
                                >
                                    {/* bg-dark text-light */}
                                    <ListGroup.Item as="li" className={highLight === "" ? "li bg-dark text-light" : "li"} onClick={() => OnClickEdit(<EditProfile />,'profile')}>
                                        <span className="font-weight-bold">Edit Profile</span>
                                        <div>
                                            <span className="mr-1"></span>
                                            <i className="fa fa-edit"></i>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className={toggle === "appointment" ? "li bg-dark text-light" : "li"} onClick={() => OnClickEdit(<Appointment />,'appointment')}>
                                        <span className="font-weight-bold">Appointments</span>
                                        <div>
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className={toggle === "package" ? "li bg-dark text-light" : "li"} onClick={() => OnClickEdit(<UserPackges packages={packages} />,'package')}>
                                        <span className="font-weight-bold"> My Packages</span>
                                        <div>
                                            <i className="fa fa-credit-card-alt"></i>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col sm={8}>
                            {toggle}
                        </Col>
                    </Row>
                </Container>
            </Section >
        </div >
    );
}
