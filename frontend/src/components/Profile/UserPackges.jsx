import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import API_URL from "../../apiConfig"
import UserPackageDetails from "./UserPackageDetails";

const Button = styled.button`
color: white;
background-color:rgb(0, 136, 204);
font-weight:800;
font-size: 1em;
margin: 1em;
padding: 0.25em 2em;
border: 3px solid rgb(0, 136, 204);
border-radius: 20px;
float: right;

    :hover&{

    }
`;


export default function UserPackges({packages}) {

    const [userPackages, setUserPackages] = useState([])

    useEffect(() => {

        axios.get(`${API_URL}/api/user/${userInfo._id}/packages/`)
            .then((req) => {
                console.log("req:", req)
                console.log("packages :", req.data.packeges)
                // title ,NumOfMeeting ,price ,decription ,services
                setUserPackages(req.data.packeges)
            })

    }, [])

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let PackageInfo = {}
    console.log("packages",packages)


    const allPackages = Object.keys(packages).length > 0 && userPackages.map((ele) => {
        
        PackageInfo = packages.find(element => element._id == ele.packege)
        console.log("PackageInfo\n",PackageInfo)
        console.log("ele\n",ele)
        return (
            <Col className="mt-3 d-flex flex-row justify-content-center">
                <Card>
                    
                    <Card.Body>
                        <Card.Title> {PackageInfo.title}</Card.Title>
                        <Card.Text>
                        Status of the package:  {ele.status == 1 ? <b style={{color:"red"}}> expired </b>: <b style={{color:"green"}}> continuous </b>} 
                        </Card.Text>
                        <UserPackageDetails 
                        PackageInfo={PackageInfo}
                        status={ele.status}
                         />
                    </Card.Body>
                </Card>
                
            </Col>
        )

    })
    return (
        <>
            <Card className="card">

                <Col className="py-4 p-2">
                    <h4 className='text-center'> All Packges </h4>
                    {allPackages}
                </Col>
            </Card>
        </>
    )
}
