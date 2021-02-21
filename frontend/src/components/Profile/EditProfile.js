import { React, useState, useEffect } from 'react'
import { Container, Button, Col, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import API_URL from "../../apiConfig";

export default function EditProfile() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const [userImage, setUserImage] = useState(userInfo.img)

    const [editProfile, setEditProfile] = useState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        img: userImage,
        email: userInfo.email,
        address: '' || userInfo.address,
        phone: '' || userInfo.phone
    });
    
    const [image, setImage] = useState(userInfo.img)

    // useEffect(() => {

    // }, [image])

    const uploadImageHundler = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'advisor')
        
        const res = await fetch('https://api.cloudinary.com/v1_1/dhrisbwmj/image/upload',{
            method: 'POST',
            body:data
        })

        const file = await res.json()
        console.log(file)
        
        setImage(file.secure_url)
        setEditProfile({
            ...editProfile,
            img: file.secure_url,
        });
    }
  

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setEditProfile({
            ...editProfile,
            [name]: value,
        });
        console.log("editProfile", editProfile)
    };

    // console.log("editProfile",editProfile)

    const token = localStorage.jwtToken

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("editProfile\n", editProfile, "\nuserInfo._id\n", userInfo._id, "\ntoken\n", token)
        axios
            .put(`${API_URL}/api/user/${userInfo._id}/profile/edit`, editProfile, { headers: { token } })
            .then((res) => {
                const user = res.data.user;
                console.log("Edit here", res)
                localStorage.setItem("userInfo", JSON.stringify(res.data.user))
                window.location.reload(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Card className="card">
                <Col className="py-4 p-2">
                    <h3 className="text-center" >Edit Profile</h3>
                    <Col className="mt-3 d-flex flex-row justify-content-center font-weight-bold">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Frist Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="firstName"
                                        value={editProfile.firstName}
                                        onChange={(e) => onChangeInput(e)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="lastName"
                                        value={editProfile.lastName}
                                        onChange={(e) => onChangeInput(e)}
                                    />
                                </Form.Group>

                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter address"
                                            name="address"
                                            value={editProfile.address}
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your phone"
                                        name="phone"
                                        value={editProfile.phone}
                                        onChange={(e) => onChangeInput(e)}
                                    />

                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={editProfile.email}
                                        onChange={(e) => onChangeInput(e)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="file" name="file" onChange={uploadImageHundler} />
                                </Form.Group>
                            </Form.Row>

                            <Button
                                variant="dark"
                                type="submit"
                                onClick={(e) => { onSubmit(e) }}
                            >
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Col>
            </Card>
        </>
    )
}
