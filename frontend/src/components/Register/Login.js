/* ========= Import Statments  ==========*/
import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form ,Alert} from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import API_URL from "../../apiConfig"
import { useHistory } from "react-router-dom";
import '../css/signup.css'
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
  

const Login = ({ setUserInfo, loginCallback }) => {
  // setUserInfo={setUserInfo}
  // loginCallback={userLogin}

  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [checkLogin, setCheckLogin] = useState({ msg: null, Error: false });
  const [dataLodding, setDataLodding] = useState(false);

  const onChangeInput = (event) => {
    event.preventDefault();
    console.log(event.value)
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
    console.log()
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.value)
    axios
      .post(`${API_URL}/api/user/login`, credentials)
      .then((res) => {
        console.log("Express backend /signin response", res);
        console.log("data user", res.data.user);
        const token = res.data.token;
        const msg = res.data.msg;

        if (token) {
          
          localStorage.setItem("jwtToken", token)
          localStorage.setItem("userInfo", JSON.stringify(res.data.user))
          setCheckLogin({ msg: null, Error: false });
          loginCallback();
          history.push("/");
        } else {
          console.log("Login error: ", msg);
          setCheckLogin({ msg: msg, Error: true });

        }

      });
    setDataLodding(!dataLodding)
  };




  return (
    <>
    
<div>
<Section> 
{checkLogin.Error && (
      <Alert variant={"danger"}>
        {checkLogin.msg}
      </Alert>
    )}
        <Card className="container mt-5  " style={{ backgroundColor: 'bige', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} >
          <Row className=" p-1  align-items-center "   >

            {/* Col image  */}

            <Col className="mast-2 col-md-6 " style={{}} >
              {/* <img
                 src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                 alt=""
                 className="img-fluid mb-3 d-none d-md-block"
               />  */}

<div className="mt-5 " style={{fontSize:"15px", color:'white',zIndex:"-9000"}}>
            <h1>Create an Account</h1>
            <p className="font-italic text-muted mb-0">
              Create a minimal registeration page
              </p>
              </div>

            </Col>

            {/* Col image END */}



            {/* <!-- Registeration Form --> */}
            <Col className=" col-md-5 col-lg-5 ml-auto mt-5 p-5" style={{ backgroundColor: '' }}>
              <Form >
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
                      value={credentials.email}
                      id="email"
                      type="email "
                      name="email"
                      placeholder="Email Address"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => onChangeInput(e)}
                    />
                  </Form.Group>
                  {/* <!-- Email Address END--> */}









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


                  {/* <!-- Password Confirmation --> */}


                  {/* <!-- Submit Button --> */}
                  <Form.Group className=" col-lg-12 mx-auto mb-0">
                    <Link href="#" className="btn rounded-pill  btn-block py-2" style={{ backgroundColor: '#0F62FE', color: "white" }}>
                      <Form.Text className="font-weight-bold" onClick={(e) => onSubmit(e)}>Login</Form.Text>
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
                      Forget Password?
                       <Link to="/resetPassword" className="text-primary ml-2">
                        Reset password
                       </Link>
                    </p>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
        
</Section> 
</div>
</>

  )
}

export default Login
