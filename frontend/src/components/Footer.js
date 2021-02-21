import React from 'react'
import { Jumbotron,Container,Row,Col,Image,Navbar } from 'react-bootstrap';
import './css/footer.css'
const Footer = () => {
    return (
      <Navbar className="foter container-fluid bg-grey py-5" expand="lg"  >
        
<Container className="container">
   <Row className="row ">
      <Col className="col-md-7">
         <Row className="row">
            <Col className="col-md-7 ">
               <Container className="logo-part ">
                  <img src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613523227/Advisor_plan_1_hj6ugw.svg" className="w-100 logo-footer" />
                  
               </Container>
            </Col>
            <Col className="col-md-4 px-1 ">
               <h6> Developed By : </h6>
               <p>Manal Alshehri</p>
               <p>Manar Alshiha</p>
               <p>Sarah Althowebi</p>
             
            </Col>
         </Row>
      </Col>
      <Col className="col-md-6">
       
      </Col>
   </Row>
</Container>


      </Navbar>
    );
}

export default Footer
