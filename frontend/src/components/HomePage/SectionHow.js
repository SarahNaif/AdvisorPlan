import React from 'react'
import { Button,Container,Row,Col,Card,Form} from 'react-bootstrap';
import styled from 'styled-components';

import Slide from './Slide';
import "../css/section-how.css"
const SectionHow = () => {


    const Section = styled.div`
      padding: 80px 0;
      margin-bottom: 36px;
      text-align: center;
    `;

    const Circle = styled.div`
      background: lightblue;
      border-radius: 50%;
      margin-bottom:20px;
      margin-left:-9px;
      width: 90px;
      height: 90px;
      
    `;
     const Text = styled.h2`
     margin-top:25px;
     color:white;
     
   `;




    return (
      <>
        <Section>
          <h2
            className="mb-5"
            style={{ color: "rgb(0, 136, 204)", fontWeight: "800" }}
          >
            How It Works
          </h2>
          
                
          <Container>
            <Col class="col-md-9 ">
              <div class="timeline-centered timeline-sm ">
                {/* step one  */}
                <article class="timeline-entry">
                  <div class="timeline-entry-inner">
                    <time datetime="2014-01-10T03:45" class="timeline-time">
                      <span>Step One</span>
                      <span></span>
                    </time>
                    <div class="timeline-icon bg-violet">
                      <i class="fa fa-exclamation"></i>
                    </div>
                    <div class="timeline-label">
                      <h4 className="timeline-title mb-4">Join Us </h4>
                      <Row className="">
                        <Col className=" p-0 col-lg-9">
                          <img style={{ width: "70px" }} src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613479698/support_1_bc79xx.png"    alt="" className="timeline-img pull-left   " />
                          <div className="vl pull-left m-2 "></div>
                          <div className="">
                            
                            <p className="  text-left ">
                              
                              Join us in by nivigating throgh the top right into signup link to explore more through our services and packages .
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </article>
                {/* step One END */}
{/* step TWO */}
                <article class="timeline-entry left-aligned">
                  <div class="timeline-entry-inner">
                    <time datetime="2014-01-10T03:45" class="timeline-time">
                      <span>Step Two</span>
                      <span></span>
                    </time>
                    <div class="timeline-icon bg-green">
                      <i class="fa fa-group"></i>
                    </div>
                    <div class="timeline-label bg-green">
                    <Row className="">
                        <Col className=" p-0 col">
                          <img style={{ width: "70px" }} src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613486629/dashboard_1_fprffe.png"    alt="" className="timeline-img pull-right   " />
                          <div className="vl pull-right m-2 "></div>
                          <div className="">
                            
                            <p className="  text-right ">
                              
                              Choose Study Fesiblity with our profisional team, that will give full analysis for your project and Explore feasible alternatives to fulfil, or even go beyond.
                            </p>
                          </div>
                        </Col>
                      </Row>

                      {/* divider OR  */}
                      <Form.Group className="form-group col-lg-12 mx-auto d-flex align-items-center my-3">
                      <Form.Group as="div" className="border-bottom w-100 ml-5"></Form.Group>
                          <Form.Group as="span" className="px-2 small text-muted font-weight-bold text-muted">
                                 OR
                          </Form.Group>
                      <Form.Group as="div" className="border-bottom w-100 mr-5"></Form.Group>
                      </Form.Group>
                  {/* Divider End  */}

                  <Row className="">
                        <Col className=" p-0 col">
                          <img style={{ width: "70px" }} src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613486435/consulting_1_dufmta.png"    alt="" className="timeline-img pull-right   " />
                          <div className="vl pull-right m-2 "></div>
                          <div className="">
                            
                            <p className="  text-right ">
                              
                              Choose consoulting with our perfisional team, that advice you and lead you to the right direction to begin your future with confident .
                            </p>
                          </div>
                        </Col>
                      </Row>

                    </div>
                  </div>
                </article>
                {/* step TOW END */}
{/* step three */}
                <article class="timeline-entry">
                  <div class="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" class="timeline-time">
                      <span>Step Three</span>
                      <span></span>
                    </time>
                    <div class="timeline-icon bg-orange">
                      <i class="fa fa-paper-plane"></i>
                    </div>
                    <div class="timeline-label bg-orange">
                      <h4 class="timeline-title">Payment</h4>

                       <Row className="">
                        <Col className=" p-0 col-lg-9">
                          <img style={{ width: "70px" }} src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613533487/credit-card_nerppx.png"    alt="" className="timeline-img pull-left   " />
                          <div className="vl pull-left m-2 "></div>
                          <div className="">
                            
                            <p className="  text-left ">
                              
                              Last step complete your payment with eiather credit card or visa card and you will recive emaill message  .
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div class="timeline-entry-inner">
                    <div class="timeline-icon">
                      <i class="fa fa-plus"></i>
                    </div>
                  </div>
                </article>
                {/* step three END */}
              </div>
            </Col>
          </Container>

          {/* <Container fluid>
            <Row>
              <Col className="mr-auto">
               
                <h2 style={{color:'rgb(0, 136, 204)',fontWeight:'800',}}>How It Works</h2>
                 
                <br></br>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  <br></br>for calling extra attention to featured content or
                  information to featured content.
                </p>
              </Col>
            </Row>

            <Row style={{ backgroundColor: "white" }}>
             
              <Container className="p-3 ms-5  d-flex align-items-center justify-content-center flex-wrap ">
                <Col sm>
                  <br></br>
                  <Card
                    style={{
                      width: "18rem",
                      border: "none",
                    }}
                  >
                    <Card.Body className="d-flex flex-column align-items-center ">
                      <Circle>
                        <Text>01</Text>
                      </Circle>
                      <Card.Title className="font-weight-bolder">Schedule</Card.Title>

                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm>
                  <br></br>
                  <Card
                    style={{
                      width: "18rem",
                      border: "none",
                    }}
                  >
                    <Card.Body className="d-flex flex-column align-items-center ">
                      <Circle>
                        <Text>02</Text>
                      </Circle>
                      <Card.Title className="font-weight-bolder">Disscuision</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm>
                  <br></br>
                  <Card
                    style={{
                      width: "18rem",
                      border: "none",
                    }}
                  >
                    <Card.Body className="d-flex flex-column align-items-center ">
                      <Circle>
                        <Text>03</Text>
                      </Circle>
                      <Card.Title className="font-weight-bolder">Plan</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Container>
            </Row>
          </Container>*/}
        </Section>
        <Slide />
      </>
    );
}

export default SectionHow
