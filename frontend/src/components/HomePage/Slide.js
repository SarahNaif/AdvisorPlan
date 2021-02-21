import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import styled from 'styled-components';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// css files under this
import "../css/slider.css"
const Slide = () => {
 
    
    const Section = styled.div`
    padding: 50px 0;
    /*  */
    margin-top:10px;
    margin-bottom: 10px;
    width: 100%;
    position: relative;
    text-align: center;
    background-color: #58718a;
    background-position: center center;
    background-size: cover;
    z-index: 9;
    background-repeat:no-repeat;
    background-image:url("https://res.cloudinary.com/dvukj9sqf/image/upload/e_brightness:-23/v1613342181/alesia-kazantceva-XLm6-fPwK5Q-unsplash_jasdqz.jpg");
    
  `;


const Wrapper = styled.div`
padding: 80px 0;

text-align: center;

`;
     const Text = styled.div`
     color: white;
     font-weight: 700;
     font-family: 'Poppins', sans-serif;
     z-index:1;
   `;
  
    var settings = {
      
      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      cssEase: "linear"
      
   
    
    };

    return (
      <>
     
      <Section className="">
       
       <Text> <h1 className="font-weight-bolder">What They Say</h1></Text>
       <Container as="div" className="border-bottom  "style={{width:'70px', border:'2px solid white',color:'white'}}></Container> 
                
        <h5 className="font-weight-bold mt-1"style={{color:'white'}}>Don't take our word for it,take theirs</h5>
         <Container as="div"className="w-100 mt-5 " > 
         <div as="div" className=""></div>
          <br></br>
          <Slider {...settings} style={{}}>
            <Col className="">
            <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5", }}
                  ></i>
                  {/* ps: change by hover */}
                  
                

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                      A 
                      <cite title="Source Title">Marco</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="">
            <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                  {/* ps: change by hover */}
                  
                  <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5" }}
                  ></i>

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                     B
                      <cite title="Source Title">BOB</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="">
            <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                  {/* ps: change by hover */}
                  
                  <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5" }}
                  ></i>

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                      Sally
                      <cite title="Source Title">s</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="">
            <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                  {/* ps: change by hover */}
                  
                  <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5" }}
                  ></i>

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="">
            <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                  {/* ps: change by hover */}
                  
                  <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5" }}
                  ></i>

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="">
              <Card
                style={{
                  width: "20rem",
                  border: "none",
                  boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.15)",
                  padding: "20px",
                }}
              >
                <Card.Body>
                  {/* ps: change by hover */}
                  
                  <i
                    className="fa fa-quote-left mb-4"
                    aria-hidden="true"
                    style={{ fontSize: "50px", color: "rgb(0, 136, 204)" ,opacity:"0.5" }}
                  ></i>

                  <Card.Title style={{color:''}}>Card Title</Card.Title>

                  <Card.Text className="">
                  Within 24 hours after meeting with Mac, we were able to implement at least five action items resulting from our time with him. He helped us to determine 
                    <figcaption className=" m-2 blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </figcaption>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Slider>
          
          </Container>
      </Section>
      <Wrapper className="gapfill"></Wrapper>


      <Wrapper id="team" className="team">
      <div className="container">

        <div className="section-title">
        <Text> <h1 className="font-weight-bolder"style={{color:'rgb(0, 136, 204)',}}>Our Team</h1></Text>
       <Container as="div" className="border-bottom  "style={{width:'70px', border:'2px solid gray',color:'white'}}></Container> 
        </div>

        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613585198/profile_yw8isc.png" alt=""/>
              <h4>Manar Alshiha</h4>
              <span>Software enginering</span>
              <p>
                Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
              </p>
              <div class="social">
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613585198/profile_yw8isc.png" alt=""/>
              <h4>Sarah Althowebi</h4>
              <span>Software enginering</span>
              <p>
                Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
              </p>
              <div className="social">
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1613585198/profile_yw8isc.png" alt=""/>
              <h4>Manal Alshehri</h4>
              <span>Software enginering</span>
              <p>
                Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
              </p>
              <div className="social">
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </Wrapper> 
      </>
    );
}

export default Slide
