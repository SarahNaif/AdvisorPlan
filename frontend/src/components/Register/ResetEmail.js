/* ========= Import Statments  ==========*/
import API_URL from '../../apiConfig'
import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

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
export default function ResetEmail() {
    const history = useHistory();


    const [resetEmail, setResetEmail] = useState("");
    const onChangeInput = (event) => {
        event.preventDefault();
        // const { name, value } = event.target;
        console.log(event.target.value)
        setResetEmail(event.target.value);
    };


    const onSubmit = (event) => {

        event.preventDefault();
        console.log("The emial you enterd is ", { email: resetEmail });
        const email = 'manal.shehri.20@gmail.com'
        axios.post(`${API_URL}/api/email/reset-password`, {email : resetEmail})
            .then((res) => {
                if (res) {
                    console.log('res of sending email is ', res)
                    history.push("/Message");
                }
                else
                    console.log('res of sending email issssssssssssssssss ', res)

            }).catch(err => console.log(err))
        // axios({
        //     headers: { 
        //         'content-type': 'application/json'
        //     },
        //     method: 'post',
        //     url: `http://127.0.0.1:5000/api/email/reset-password`,
        //     body: {
        //             email: "manal.shehri.20@gmail.com"
        //     }
        // })
        // .then((response) => response.data)
        // .catch((error) => error);

    }
    //   });


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

                            <h1>Reset Your Password</h1>
                            <p className="font-italic text-muted mb-0">
                                You will recive an email to reset your password
           </p>

                        </Col>

                        {/* Col image END */}



                        {/* <!-- Registeration Form --> */}
                        <Col className=" col-md-5 col-lg-5 ml-auto mt-5" style={{ backgroundColor: '' }}>
                            <Form>
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



                                    {/* <!-- Email Address --> */}
                                    <Form.Group className="input-group col-lg-12 mb-4" controlId="formBasicEmail">
                                        <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                                            <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                                                <i className="fa fa-envelope text-muted "></i>
                                            </Form.Group>
                                        </Form.Group>

                                        <Form.Control

                                            id="email"
                                            type="email "
                                            name="email"
                                            placeholder="Email Address"
                                            className="form-control bg-white border-left-0 border-md"
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                    </Form.Group>
                                    {/* <!-- Email Address END--> */}


                                    {/* <!-- Submit Button --> */}
                                    <Form.Group className=" col-lg-12 mx-auto mb-0">
                                        {/* <Button variant="secondary" >Reset</Button> */}
                                        <Link href="#" className="btn rounded-pill  btn-block py-2" style={{ backgroundColor: '#0F62FE', color: "white" }}>
                                            <Form.Text className="font-weight-bold" onClick={(e) => onSubmit(e)}>Reset password</Form.Text>
                                        </Link>
                                    </Form.Group>
                                    {/* <!-- Submit Button END--> */}






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
