import { React, useState, useEffect, useRef } from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import Subhome from "../components/HomePage/Subhome";

import '../Style/hero.css';



import { ToastContainer, toast } from 'react-toastify';



// --------------------------------------------------------------------
const Button = styled.button`
color: white;
background-color:rgb(0, 136, 204);
font-weight:800;
font-size: 1em;
margin: 2em;
padding: 0.25em 2em;
border: 3px solid rgb(0, 136, 204);
border-radius: 20px;

    :hover&{
        background-color:transparent;
        color:white;
        
        font-weight:900;
    }
`;


const Home = () => {




  // styled-compunets

  // const heroimg={
  //   backgroundImage:''
  // };

  return (
    <>
      {/* if anyone want to change the hero image in jumbotron */}
      <Jumbotron
        className="masthead text-white text-center"
        style={{
          height: "98vh",
          backgroundImage:
            "url(https://res.cloudinary.com/dvukj9sqf/image/upload/v1613342169/isaac-sloman-gaGKK48b7CQ-unsplash_kbidra.jpg)",
          backgroundPositionY: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container as="div" className="  mt-5 p-5">
          {/* the overlay */}
          <div as="div" className="overlay"></div>
          <Container className="container mt-4 p-2">
            <Row className=" textbox">
              <Col className="col-xl-9 mx-auto ">

                <h1 className=" mt-4 head ">
                  WE HELP YOU TO GROW YOUR BUSINESS
                  
                  {/* <Typical
        steps={['YOUR', 1000, 'Bussiness', 500 , ]}
        loop={Infinity}
        wrapper="h1"
        className="head"
      /> */}
      </h1>
                <Button>Services</Button>
              </Col>

            </Row>
          </Container>
        </Container>
      </Jumbotron>
      {/* advantage */}
      <Subhome />
      <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
    </>
  );
}

export default Home
