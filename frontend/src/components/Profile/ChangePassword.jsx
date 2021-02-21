/* ========= Import Statments  ==========*/
import { React, useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import API_URL from "../../apiConfig"
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

const ChangePassword = () => {


    const history = useHistory();
    const [forgetReq, setForgetReq] = useState({});
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  
    const onChangeInput = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setForgetReq({
        ...forgetReq,
        [name]: value,
      });
      
    };
    console.log("req info",forgetReq)
    const onSubmit = (event) => {
      event.preventDefault();
      console.log(event.value)
      axios
        .post(`${API_URL}/api/user/changepassword`, {forgetReq, userId: userInfo._id})
        .then((res) => {
          console.log('res',res)            
        });
    };
  
  


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

                            <h1>Change Password</h1>
                            <p className="font-italic text-muted mb-0">
                                ------------------
               </p>

                        </Col>

                        {/* Col image END */}



                        {/* <!-- Registeration Form --> */}
                        <Col className=" col-md-5 col-lg-5 ml-auto mt-5" style={{ backgroundColor: '' }}>
                            <Form action="#" >
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



                                    {/* <!-- Old Password --> */}
                                    <Form.Group className="input-group col-lg-12 mb-4">
                                        <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                                            <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                                                <i className="fa fa-lock text-muted "></i>
                                            </Form.Group>
                                        </Form.Group>
                                        <Form.Control

                                            id="oldpassword"
                                            type="password"
                                            name="oldPassword"
                                            placeholder="Old Password"
                                            className="form-control bg-white border-left-0 border-md"
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                    </Form.Group>










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
                                            placeholder="New Password"
                                            className="form-control bg-white border-left-0 border-md"
                                            onChange={(e) => onChangeInput(e)}
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
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                    </Form.Group>
                                    {/* <!-- Password END --> */}


                                    {/* <!-- Password Confirmation --> */}


                                    {/* <!-- Submit Button --> */}
                                    <Form.Group className=" col-lg-12 mx-auto mb-0">
                                        <Link href="#" className="btn rounded-pill  btn-block py-2" style={{ backgroundColor: '#0F62FE', color: "white" }}>
                                            <Form.Text className="font-weight-bold"
                                            onClick={(e) => onSubmit(e)}
                                            >Change Password</Form.Text>
                                        </Link>
                                    </Form.Group>
                                    {/* <!-- Submit Button END--> */}


                                    {/* <!-- Divider Text --> */}
                                    <Form.Group className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                        <Form.Group as="div" className="border-bottom w-100 ml-5"></Form.Group>
                                        <Form.Group as="span" className="px-2 small text-muted font-weight-bold text-muted">
                                            OR
                     </Form.Group>
                                        <Form.Group as="div" className="border-bottom w-100 mr-5"></Form.Group>
                                    </Form.Group>
                                    {/* <!-- Divider Text END--> */}



                                    {/* <!-- Social Login --> */}
                                    {/* <div class="form-group col-lg-12 mx-auto">
                     <a
                       href="#"
                       class="btn btn-primary btn-block py-2 btn-facebook"
                     >
                       <i class="fa fa-facebook-f mr-2"></i>
                       <span class="font-weight-bold">
                         Continue with Facebook
                       </span>
                     </a>
                     <a
                       href="#"
                       class="btn btn-primary btn-block py-2 btn-twitter"
                     >
                       <i class="fa fa-twitter mr-2"></i>
                       <span class="font-weight-bold">
                         Continue with Twitter
                       </span>
                     </a>
                   </div> */}



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

export default ChangePassword
