import { React, useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import API_URL from "../../apiConfig"
import axios from 'axios';
// import Moment from 'react-moment';
import Moment from 'react-moment';


export default function Appointment() {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const [appointments, setAppointments] = useState([])
    


    useEffect(() => {
        axios.get(`${API_URL}/api/user/${userInfo._id}/appointments`)
          .then((req) => {
            setAppointments(req.data.appointment)
            // console.log("packages :", req.data.packages)
            console.log(req.data)
            // title ,NumOfMeeting ,price ,decription ,services
          })
      }, [])

      console.log(appointments.length)

      const appointmentData = appointments.map(appointment => {
        // appointment
        return (<tr>
        <td>{appointment.topic}</td>
        <td>
        <Moment format="D MMM YYYY" withTitle>
        {appointment.date}
            </Moment>
            </td>
        <td>{appointment.service}</td>
        <td>{appointment.time}</td>
        <td>{appointment.details}</td>
    </tr>)
      })
      

    return (
        <>
            <Card className="card text-center">
                <Col className="py-4 p-2">
                    <h4>All Appointments ({appointments.length})</h4>
                    <Col className="mt-3 d-flex flex-row justify-content-center">
                        <Table  bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Time</th>
                                    <th>Details</th>

                                </tr>
                            </thead>
                            <tbody>
                               {appointmentData}
                            </tbody>
                        </Table>   
                    </Col>
{/*                  
                    <h4>Upcomming Appointments (3)</h4>
                    <Col className="mt-3 d-flex flex-row justify-content-center">
                        <Table  bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ada</td>
                                    <td>Ada</td>
                                    <td>Consult</td>
                                    <td>icon</td>
                                    <td>icon</td>
                                    <td>Edit Cancel</td>
                                </tr>
                                <tr>
                                    <td>Ada</td>
                                    <td>Ada</td>
                                    <td>Consult</td>
                                    <td>icon</td>
                                    <td>icon</td>
                                    <td>Edit Cancel</td>
                                </tr>
                                <tr>
                                    <td>Ada</td>
                                    <td>Ada</td>
                                    <td>Consult</td>
                                    <td>icon</td>
                                    <td>icon</td>
                                    <td>Edit Cancel</td>
                                </tr>
                            </tbody>
                        </Table>   
                    </Col>
                
                    <h4>Canceled Appointments (1)</h4>
                    <Col className="mt-3 d-flex flex-row justify-content-center">
                        <Table  bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Service</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ada</td>
                                    <td>Ada</td>
                                    <td>Consult</td>
                                    <td>icon</td>
                                    <td>icon</td>
                                    <td>Edit Cancel</td>
                                </tr>
                            </tbody>
                        </Table>   
                    </Col>
                 */}
                </Col>
            </Card>
        </>
    )
}
