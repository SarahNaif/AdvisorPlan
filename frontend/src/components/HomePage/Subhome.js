import {React,useState} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import styled from 'styled-components';

import SectionHow from './SectionHow'

import '../css/home.css'
const Subhome = () => {

    const Section = styled.div`
      padding: 80px 0;
      margin-bottom: 36px;
      text-align: center;
      
    `;
   
 const Text = styled.div`
   color: rgb(0, 136, 204);
   font-weight: 800;
   font-family: 'Poppins', sans-serif;
 `;


    return (
      <>
        <Section>
          <Container fluid>
            <Row>
              <Col className="mr-auto">
               <Text><h2 className='font-weight-bolder'>Our Services</h2></Text>
               <Container as="div" className="border-bottom   "style={{width:'70px', border:'2px solid #bbb'}}></Container> 
                <br></br>
               
              </Col>
            </Row>

            <Row style={{ backgroundColor: "white" }}>
              {/* Cards Services */}
              <Container className="p-3 ms-5  d-flex align-items-center justify-content-center flex-wrap ">
                <Col sm>
                  <br></br>
                  <Card className="effect"
                     style={{
                      width: "20rem",
                      border:'none',
                      // boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.15)'
                      padding:'20px'
                    }}
                  >
                    <Card.Body>
                      {/* ps: change by hover */}
                      <Card.Img
                        className="mb-4 gray-700 img"
                        style={{ width: "80px", height: "80px" }}
                        variant="top"
                        src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613040593/discuss-issue_nozups.png"
                      />
                      <Card.Title>Consoulting</Card.Title>
                      
                      <Card.Text>
                        We provide you with an advice for all your problems and making recomendation
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm>
                  <br></br>
                  <Card className="effect"
                    style={{
                      width: "20rem",
                      border:'none',
                      // boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.15)'
                      padding:'20px'
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        className="mb-4 gray-700 img"
                        style={{ width: "80px", height: "80px" }}
                        variant="top"
                        src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613044644/analytics_jhio4x.png"
                      />
                      <Card.Title>Planning</Card.Title>
                      
                      <Card.Text>
                        We provide with strategic plan with modren technology to guide through future 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm>
                  <br></br>
                  <Card className="effect"
                    style={{
                      width: "20rem",
                      border:'none',
                      // boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.15)'
                      padding:'20px'
                    }}
                  >
                    <Card.Body>
                      <Card.Img
                        className="mb-4 gray-700 img"
                        style={{ width: "80px", height: "80px" }}
                        variant="top"
                        src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613045168/goal_lp46j2.png"
                      />
                      <Card.Title>Achieving</Card.Title>
                      
                      <Card.Text>
                        in last we give you number of guidenc to mantain your achivement 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Container>
            </Row>
          </Container>
        </Section>
        {/* about us section */}
        
        
      <Container className="">
      <Text><h2 className='font-weight-bolder text-center'>About us</h2></Text>
      <Container as="div" className="border-bottom   "style={{width:'70px', border:'2px solid #bbb'}}></Container> 
        <Row className=" mt-5 ">
          
          <Col className="col-lg-6 ">
            <img src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613424658/parallax_wkjfye.jpg" class="img-fluid" alt=""/>
          </Col>
          
          <Col className="col-lg-6 pt-4 pt-lg-0 ">
          
            <p>
            is an integrated consulting team of designers, developers, and engineers that builds fresh experiences people love. Powered by our design-led innovation process we deliver end-to-end experiences to help businesses grow. From creative brands and websites to intuitive apps and systems to digital hardware and robots, .
            </p>
            <ul >
              <li style={{listStyle:'none' }}><i className="fa fa-check" style={{color:'#0353a4'}} aria-hidden="true"></i> we work with you from strategy to execution to create what's next</li>
              <li style={{listStyle:'none'}}><i className="fa fa-check" style={{color:'#0353a4'}} aria-hidden="true"></i> we work with you from strategy to execution to create what's next</li>
            </ul>
            <Row className="row icon-boxes">
              <Col className="col-md-6 text-center">
              <i class="fa fa-comments-o" style={{fontSize:'50px', textAlign:'center', color:'#3e86b0', marginBottom:'20px',marginTop:'20px'}} aria-hidden="true"></i>
              <div className="text-left">
                <h4 className="" style={{color:'#626160'}}>Communicating</h4>
                <p>in advisor plan we profide you with excelnt team that are skilled in Communicating with you.</p>
                </div>
              </Col>
              <Col className="col-md-6 mt-4 mt-md-0 text-center">
                <i className="fa fa-cogs" style={{fontSize:'50px', textAlign:'center', color:'#3e86b0', marginBottom:'20px',marginTop:'20px'}}aria-hidden="true"></i>
                <div className="text-left">
                <h4 className="" style={{color:'#626160'}}>Strategy Planning</h4>
                <p>in advisor plan we profide you strategic planning with modren technology to predict the result</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    <Section>
<SectionHow/>
    </Section>
        
{/* how its work section */}
       
        
      </>
    );
}

export default Subhome
