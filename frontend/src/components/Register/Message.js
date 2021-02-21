import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Thanks = styled.h1`
color: #4a4a4a;
text-align: center;
text-transform: uppercase;
font-family: "Arial Black", sans-serif;
font-size: 5em;
letter-spacing: -1px;

`;


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

const Button = styled.button`
color: white;
background-color:rgb(0, 136, 204);
font-weight:800;
font-size: 1em;
margin: 1em;
padding: 0.25em 2em;
border: 3px solid rgb(0, 136, 204);
border-radius: 20px;

    :hover&{
        background-color:transparent;
        color:rgb(0, 136, 204);
        font-weight:900;
    }
`;


const Go = styled.a`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: #2196f3;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;


&:hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 1s;
}


& span {
    position: absolute;
    display: block;
}




& span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #2196f3);
}



&:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
}


& span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #2196f3);
}

&:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
}



& span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
}

&:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
}



& span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #2196f3);
}

&:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
}
`

export default function Message() {
    return (
        <div>
            <Section>
            <Card className="container mt-5  "
                    style={{ backgroundColor: '#ffffff', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} >

                    <Row className="row p-5 mt-5  align-items-center justify-content-center  flex-column" style={{ textAlign: "center" }} >
                        <Thanks > Email Sent !
                        </Thanks>
                        <br />
                        <p style={{fontSize:'26px'}}> we have sent you and email with a link to reset your password, please checkd you email inbox.</p>
                        <img style={{width:'109px'}}src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613561293/check-mark_wtktgb.png" alt=""/>
                    </Row>
                    <Row className="row p-5 mb-5 align-items-center justify-content-center ">

                        <Go as={Link} to={'/Login'}> 
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Back to Home Login 
                        </Go>

                    </Row>
                </Card >

            </Section >
        </div >
    )
}
