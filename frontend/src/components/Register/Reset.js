/* ========= Import Statments  ==========*/
import API_URL from '../../apiConfig';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
/*  ================================= */

const Section = styled.div`
padding: 80px 0;
margin-bottom: 36px;
margin-top:50px;
text-align: center;
width:100%;
height:auto;
/* background-color:; */

`;
const Reset = () => {
  const { userId, userToken } = useParams()
  const [formData, setFormData] = useState({})
  

const handleOnchange = (event) =>{
  setFormData({...formData, [event.target.name]: event.target.value})
} 

const onSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:5000/api/email/reset/${userId}/${userToken}`, { newPassword: formData.password })
      .then((res) => {
        if (res)
          console.log('res of sending email is: ', res)
        else
          console.log('res of sending email issssssssssssssssss: ', res)
      }).catch(err => console.log(err))
  }

  return (
    <div>
      <Section>
        <Card className="container mt-5  " style={{ backgroundColor: 'bige', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} >
          <Row className="row p-5 mt-5 mb-5 align-items-center "   >

            {/* Col image  */}

            <Col className="col-md-5 pr-lg-7 mb-5 mb-md-0 " style={{}} >
              {/* <img
                 src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                 alt=""
                 className="img-fluid mb-3 d-none d-md-block"
               />  */}

              <h1>Reset passord</h1>
              <p className="font-italic text-muted mb-0">
              Type your new password and then submit
               </p>

            </Col>

            {/* Col image END */}



            {/* <!-- Registeration Form --> */}
            <Col className=" col-md-5 col-lg-5 ml-auto mt-5" style={{ backgroundColor: '' }}>
              <Form onSubmit={onSubmit}>
                <Row >


                  {/* <!--  Name --> */}

                  {/* <!--  Name END --> */}




                  {/* <!-- User Name --> */}
                  {/* <Form.Group className="input-group col-lg-6 mb-4">
                     <Form.Group as="div"className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                       <Form.Group as="span"className="input-group-text border-0  bg-white px-4  ">
                         <i className="fa fa-user text-muted "></i>
                       </Form.Group>
                     </Form.Group>
 
                     <Form.Control
                       id="firstName" type="text" name="firstname" placeholder="Your UserName"
                       className="form-control bg-white border-left-0 border-md border-start-0"
                     />
                  </Form.Group> */}
                  {/* <!-- User Name END --> */}


                  {/* <!-- Password --> */}
                  <Form.Group className="input-group col-lg-12 mb-4">
                    <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                      <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                        <i className="fa fa-lock text-muted "></i>
                      </Form.Group>
                    </Form.Group>
                    <Form.Control
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleOnchange}
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </Form.Group>

                  {/* <!-- Password Confirmation --> */}
                  <Form.Group className="input-group col-lg-12 mb-4">
                    <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                      <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                        <i className="fa fa-lock text-muted "></i>
                      </Form.Group>
                    </Form.Group>
                    <Form.Control
                      id="passwordConfirmation"
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      className="form-control bg-white border-left-0 border-md"
                    />
                  </Form.Group>
                  {/* <!-- Password END --> */}

                  {/* <!-- Password Confirmation --> */}

                  {/* <!-- Submit Button --> */}
                  <Form.Group className=" col-lg-12 mx-auto mb-0">
                      <Button variant="secondary" type='submit'> Submit </Button>
                  </Form.Group>
                  {/* <!-- Submit Button END--> */}


                  {/* <!-- Already Registered --> */}
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>

      </Section>
    </div>
  )

}

export default Reset
