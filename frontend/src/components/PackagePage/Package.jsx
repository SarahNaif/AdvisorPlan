import { React, useState, useEffect } from 'react'
import { Button, Container, Row, Col, Card, CardDeck, Badge } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Section = styled.div`
padding: 80px 0;
margin-bottom: 36px;
margin-top:50px;
text-align: center;
width:100%;
height:auto;
/* background-color:; */

`;
const Center = styled(Card)`
padding: 80px 0;
margin-bottom: 36px;
text-align: center;


`;
const Package = ({packages}) => {

    const allPackages = packages.map((ele, i) => {

        return (
            <>
            
                <Col sm>
                    <br></br>
                    <Card
                        style={{
                            boxShadow: "0 14px 26px rgba(0,0,0,.09) ",
                        }}
                    >
                        <Card.Body>
                            <Card.Title> <h1> {ele.price} $  <Badge variant="secondary">New</Badge> </h1> </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                {ele.title}
                            </Card.Subtitle>
                            <hr />
                            <Card.Text>
                                {ele.decription}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus, est voluptatum deleniti dolorum qui, odit animi corporis, nesciunt recusandae rem eligendi velit .
                            </Card.Text>
                            <hr />
                            <p> Number Of Meeting : {ele.NumOfMeeting} </p> <br />
                            <Button size="lg" as={Link} to={`/Packages/${ele._id}`} variant="info" >More ifo</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </>
        )


    })

    return (
        <>
        <div>
            <Section>
                <Container fluid>
                    <Row>
                        <Col className="mr-auto">
                            <h2 style={{ color: "#17a2b8" }}>Our Packages</h2>
                            <br></br>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component
                                <br></br>for calling extra attention to featured content or information to featured content.
                                </p>
                        </Col>
                    </Row>

                    <Row style={{ backgroundColor: "white" }}>
                        {/* Cards allPackages */}
                        <Container className="p-3 ms-5  d-flex align-items-center justify-content-center flex-wrap " >
                            {packages.length > 0 ? allPackages : <h1>hi</h1>}
                            
                            
                        </Container>
                    </Row>
                </Container>
            </Section>
        </div>
        </>
    );
}

export default Package
