import { React, useState, useEffect } from 'react'
import API_URL from '../../apiConfig'
import axios from 'axios';
import { Button, Container, Row, Col, Card, CardDeck, Badge, FormCheck, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import LoginAlert from "../../feedback/LoginAlert"
const PackageDetails = ({ packages ,isLoggedIn}) => {
    const { id } = useParams()

    const [singlePackage, setSinglePackage] = useState([])
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
//userInfo._id
    useEffect(() => {
        axios.get(`${API_URL}/api/package/${id}`)
            .then((req) => {
                // console.log("single package :", req.data.package)
                setSinglePackage(req.data.package)
                // title ,NumOfMeeting ,price ,decription ,services

            })
           
            axios.get(`${API_URL}/api/user//${id}/info`)
            .then((req) => {
                // console.log("single package :", req.data.package)
                console.log(req)
                // localStorage.setItem("userInfo", JSON.stringify(req.data.user))
                // title ,NumOfMeeting ,price ,decription ,services

            })
    }, [])

    const Section = styled.div`
        padding: 80px 0;
        margin-bottom: 36px;
        
        `;
    const Center = styled(Card)`
        padding: 80px 0;
        margin-bottom: 36px;
        text-align: center;
        
        
        `;

    return (
        <>
            <Section>
                <Container fluid>
                    <Container style={{ border: "1px solid white", padding: 50, marginTop: "50px", marginBottom: "50px", borderRadius: "15px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                        <br></br>
                        <h1> {singlePackage.title} <span> <small>  {singlePackage.price} $  </small> </span></h1>
                        <hr />
                        <p style={{ margin: "50px" }}>
                            {singlePackage.decription}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium maiores explicabo beatae quasi tenetur modi sunt dignissimos asperiores similique adipisci earum suscipit, nemo, minus iste ratione, voluptatibus officia ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium maiores explicabo beatae quasi tenetur modi sunt dignissimos asperiores similique adipisci earum suscipit, nemo, minus iste ratione, voluptatibus officia ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laudantium maiores explicabo beatae quasi tenetur modi sunt dignissimos asperiores similique adipisci earum suscipit, nemo, minus iste ratione, voluptatibus officia ipsam.
                        </p>

                        <p> Number Of Meeting : {singlePackage.NumOfMeeting} </p> <br />
                        <hr />
                        {/* Default unchecked */}
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                            <label class="custom-control-label" for="defaultUnchecked"> I agree to the <span style={{ color: "rgb(0, 136, 204)" }} > Terms and Conditions </span> </label>
                        </div>
                        <br />
                        {!isLoggedIn ?
                            <>
                                <LoginAlert />
                            </>
                            :
                            <>
                                <Button 
                                variant="praimary" 
                                as={Link} 
                                to={`/packages/${singlePackage._id}/pay`} 
                                > Pay </Button>
                            </>
                        }

                    </Container>
                </Container>
            </Section>
        </>
    );
}

export default PackageDetails
