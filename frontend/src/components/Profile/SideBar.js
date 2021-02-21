import React from 'react'
import { Container, ListGroup, Col, Card, Image, Row } from 'react-bootstrap';

export default function SideBar() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const OnClickEdit = () => {
        console.log('You clicked me =)')

    }
    return (
        <>
            <Card className="card text-center">
                <Col className="py-4 p-2">
                    <Image src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png" rounded width="100" />
                    <Col className="mt-3 d-flex flex-row justify-content-center">
                        <h5>{userInfo.firstName} {userInfo.lastName} AlShehri</h5>
                        <span className="dots">
                            <li className="fa fa-user"></li>
                        </span>
                    </Col>
                    <span>@{userInfo.username}</span>
                </Col>

                <ListGroup as="ul" className="list-unstyled list">
                    <ListGroup.Item as="li" className="li" onClick={OnClickEdit}>
                        <span className="font-weight-bold">Edit Profile</span>
                        <div>
                            <span className="mr-1"></span>
                            <i className="fa fa-edit"></i>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="li" onClick={OnClickEdit}>
                        <span className="font-weight-bold">Appointments</span>
                        <div>
                            <span className="mr-1">4</span>
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="li" onClick={OnClickEdit}>
                        <span className="font-weight-bold"> My Packages </span>
                        <div>
                            <span className="mr-1">4</span>
                            <i className="fa fa-angle-right"></i>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}
