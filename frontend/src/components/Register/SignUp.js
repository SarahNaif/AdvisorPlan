/* ========= Import Statments  ==========*/
import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form,Alert } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import API_URL from "../../apiConfig"
import '../css/signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*  ================================= */


const Section = styled.div`
padding: 70px 0;
margin-bottom: 36px;
margin-top:50px;
text-align: center;
width:100%;
height:auto;
/* background-color:; */

`;


const SignUp = () => {

  const history = useHistory();

  const [user, setUser] = useState({});
  const [register, setRegister] = useState(true);
  let msg = "";

  const onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  console.log("user out onSubmit",user)

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user in onSubmit",user)

    axios
      .post(`${API_URL}/api/user/signup`, user)
      .then((res) => {
        console.log("here",res.data)
        const user = res.data; // res.data.user not work
        const token = res.data.token;
        msg = res.data.msg;
        if (user) {
            toast.info(`${msg}`, {
              position: "top-center",
              autoClose: 2,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: 1,
              });

              history.push("/login");
          
        } else {
          setTimeout(() => {
            setRegister(false);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
      
      
  };

  return (
    <>
    <Section>
      {!register && (
        <Alert variant={"danger"}>
          The email is already in use. Please change the email
        </Alert>
      )}

      <Card className="container mt-5  " style={{ backgroundColor: 'bige', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} >
      <Row className=" p-1   "   >

          {/* Col image  */}

          <Col className=" mast col-md-6" >
               {/* <div  className="overlay"></div> */}
            {/* <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                alt=""
                className="img-fluid mb-3 d-none d-md-block"
              />  */}
              
<div className="mt-5 " style={{fontSize:"15px", color:'white'}}>
            <h1>Create an Account</h1>
            <p className="font-italic text-muted mb-0">
              
              </p>
              </div>
          </Col>

          {/* Col image END */}



          {/* <!-- Registeration Form --> */}
          <Col className=" col-md-5 col-lg-6 ml-auto mt-5 p-5"  >
            <Form action="#" >
              <Row>


                {/* <!--  Name --> */}
                <Form.Group className="input-group col-lg-6 mb-4"controlId="formBasicEmail" >
                  <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                    <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                      <i className="fa fa-user text-muted "></i>
                    </Form.Group>
                  </Form.Group>

                  <Form.Control
                    required
                    id="firstName" type="text" name="firstName" placeholder="First Name" onChange={(e) => onChangeInput(e)}
                    className="form-control bg-white border-left-0 border-md border-start-0"
                  />
                </Form.Group>
                {/* <!--  Name END --> */}




                {/* <!-- User Name --> */}
                <Form.Group className="input-group col-lg-6 mb-4">
                  <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                    <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                      <i className="fa fa-user text-muted "></i>
                    </Form.Group>
                  </Form.Group>

                  <Form.Control
                    id="lastName" type="text" name="lastName" placeholder=" Last Name " onChange={(e) => onChangeInput(e)}
                    className="form-control bg-white border-left-0 border-md border-start-0"
                  />
                </Form.Group>
                {/* <!-- User Name END --> */}


                {/* <!-- Address --> */}
                <Form.Group className="input-group col-lg-12 mb-4" controlId="formBasicEmail">
                  <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                    <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                    <i class="fa fa-at" aria-hidden="true"></i>
                    </Form.Group>
                  </Form.Group>

                  <Form.Control

                    id="email"
                    type="username"
                    name="username"
                    placeholder="Your username"
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) => onChangeInput(e)}
                  />
                </Form.Group>
                {/* <!-- Address END--> */}


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



                {/* <!-- Phone Number  // 10 numbers only --> */}
                <Form.Group className="input-group col-lg-12 mb-4">
                  <Form.Group as="div" className="input-group-text input-group-prepend border-end-0 bg-white p-0 ">
                    <Form.Group as="span" className="input-group-text border-0  bg-white px-4  ">
                      <i className="fa fa-phone-square text-muted "></i>
                    </Form.Group>
                  </Form.Group>

                  <Form.Control

                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number "
                    className="form-control bg-white border-md border-left-0 pl-3"
                    
                  />
                </Form.Group>
                {/* <!-- Phone Number  END --> */}


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
                    className="form-control bg-white border-left-0 border-md"
                    onChange={(e) => onChangeInput(e)}
                  />
                </Form.Group>
                {/* <!-- Password END --> */}


                <Form.Group className=" col-lg-12 mx-auto mb-0">
                  <Link href="#" className="btn rounded-pill  btn-block py-2" style={{ backgroundColor: 'rgb(0, 136, 204)', color: "white" }}>
                    <Form.Text className="font-weight-bold" onClick={(e) => onSubmit(e)} >Create your account</Form.Text>
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
                <Form.Group className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Already Registered?
                      <Link to="/login" className="text-primary ml-2">
                      Login
                      </Link>
                  </p>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>

    </Section>

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

export default SignUp
