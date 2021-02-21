/* ========= Import Statments  ==========*/
import React ,{useState}from 'react'
import { Button, Navbar, Nav, Form, FormControl, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import SureLogout from './Register/SureLogout';
import '../Style/Navbar.css'
/*  ================================= */

const NavBar = (props) => {

const [navBar,setNavbar]=useState(false);
const changeBackground=()=>{
  if(window.scrollY >=80){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
};
window.addEventListener('scroll',changeBackground)

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const history = useHistory();

  const location = useLocation()

  const title = props.isLoggedIn ? "profile" : "Login";

  return (
    <div>
       <Navbar className={navBar || location.pathname !== '/' ?'navBar acttive':'navBar notactive'} fixed="top"  expand="lg" >
        <Navbar.Brand className="ml-5 font-weight-bold mt-2" as={Link} to="/">
          ADVISOR PLAN
          </Navbar.Brand>
        <Navbar.Toggle
          className="border border-white "
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse id="basic-navbar-nav" bsPrefix={"navbar-collapse"}>
          <Nav className="  ml-auto mr-5 font-weight-bold">
            <Nav.Link className="mt-2" as={Link} to="/">
              Home
              </Nav.Link>
           
            <Nav.Link className="mt-2" as={Link} to="/Packages" >
              Packages
              </Nav.Link>
            <Nav.Link className="mt-2" as={Link} to="/Aboutus">
              About us
              </Nav.Link>
          </Nav>

          <Nav className=" ml-auto mr-5 font-weight-normal ">
            {!props.isLoggedIn ? <>
              <Nav.Link className="mt-2 font-weight-bold" as={Link} to="/signup"style={{color:'white'}} >
                Signup{" "}
              </Nav.Link>

              <Nav.Link className="mt-2 font-weight-bold" as={Link} to="/Login">
                Login{" "}
              </Nav.Link>
            </> :
              <NavDropdown
                className="mt-2"
                title={title}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  profile
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/changepassword">
                  change password
                </NavDropdown.Item> */}
                <SureLogout loginCallback={props.loginCallback} />
              </NavDropdown>
            }
            {/* to make margin in right */}
            <Nav.Link className="mr-2  " >
            </Nav.Link>
            <Nav.Link className="mr-2" >
            </Nav.Link>
            {/* to make margin in right */}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
