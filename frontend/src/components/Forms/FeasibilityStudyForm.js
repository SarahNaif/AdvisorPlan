import { React, useState, useEffect } from 'react'
// import ReactLightCalendar from '@lls/react-light-calendar'
// import Calendar from '@lls/react-light-calendar'
// import '@lls/react-light-calendar/dist/index.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import '../../Style/appointment.css';
import styled from 'styled-components';
import Times from '../Appointments/Times'
import { useParams } from 'react-router-dom';
import API_URL from "../../apiConfig"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";


const Section = styled.div`
padding: 80px 0;
margin-bottom: 36px;
margin-top:50px;
text-align: center;
width:100%;
height:auto;
/* background-color:; */

`;

export default function FeasibilityStudyForm() {
    const history = useHistory();
    
    const { NumOfMeeting } = useParams()
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const defaultAvailableTimes = ['10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM']
    // from axios get all users appoitments search by date => result 
    // get the result and remove it from the defaultAvailableTimes 
    // avalibleTimes = defaultAvailableTimes - resultFromAxios 
    // send the avalibleTimes to the chind component 

    // states 
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [avalibleTimes, setAvalibleTimes] = useState(['No Avalible times']);
    const [study, setStudy] = useState({});

    const reservedAppointments = []
    // const reservedAppointments = [{date,time:[]}]


    useEffect(() => {
        axios.get(`${API_URL}/api/appointments`)
            .then((req) => {
                // console.log("appointments :", req.data.appointments)

                const dates = []
                req.data.appointments.forEach(ele => {
                    let elementDate = new Date(ele.date);
                    // console.log(elementDate)
                    // var date = ele.date
                    if (dates.indexOf(ele.date) === -1) {
                        dates.push(ele.date);
                        // console.log('IF', ele.date);
                    }
                    // else {
                    //     // console.log('Else', ele.date);
                    // }
                    // reservedAppointments.push(date) 
                    // console.log(dates, '.............')   

                });

                dates.forEach(element => {
                    reservedAppointments.push({ theDate: element, availableTimes: ['10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'] })
                })


                // add the time
                req.data.appointments.forEach((a, index) => {

                    // console.log('a',a.date)
                    // const index = array.indexOf(5);
                    // if (index > -1) {
                    //     array.splice(index, 1);
                    // }

                    // reservedAppointments.forEach((e,i) => {
                    //     console.log('a = ',a,'e = ',e)
                    //     if (e.theDate !== a.date)
                    //     {
                    //         console.log('*** They are == ***')                          

                    //     }
                    //     else 
                    //     {

                    //     }

                    // })


                    // reservedAppointments.forEach((e,i) => { e.theDate == a.date ? e.availableTimes.splice(i, 1) : console.log('N') })

                    reservedAppointments.forEach((e, i) => {
                        if (e.theDate == a.date) {
                            console.log('e => ', e, 'a => ', a)
                            //   e.availableTimes.splice(i, 1)
                            const filteredTime = e.availableTimes.filter(e => e != a.time);
                            console.log('filteredTime', filteredTime)
                        }

                    })

                    // const newReservedAppointments = reservedAppointments.filter((eRes,iRes) => {eRes.theDate == a.date})



                    //  reservedAppointments.forEach(e => { e.date == a.date ? e.avalibleTimes.push(a.time) : console.log('N')})

                })

                console.log('reservedAppointments', reservedAppointments)

            })
    }, [])


















    // Booked = { "10am" : [dates], "9am":[dates]}

    // const fakeData =
    //     [
    //         {
    //             date: 'Tue Feb 16 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['09:00 AM', '10:00 AM', '11:00AM']
    //         },
    //         {
    //             date: 'Wed Feb 17 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['10:00 AM', '01:00PM']
    //         },
    //         {
    //             date: 'Thu Feb 18 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['09:00 AM', '10:00 AM', '11:00AM']
    //         },
    //         {
    //             date: 'Fri Feb 19 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['10:00 AM', '01:00PM']
    //         },
    //         {
    //             date: 'Sat Feb 20 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['11:00 AM', '12:00PM']
    //         },
    //         {
    //             date: 'Sun Feb 21 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
    //             availableTimes: ['1200 PM']
    //         }
    //     ]

    const fakeDatas = [new Date(), new Date(2021, 1, 2), new Date(2021, 1, 4)]
    // const fakeDatas = ['Sun Feb 21 2021 00:00:00 GMT+0300 (Arabian Standard Time)','Sat Feb 20 2021 00:00:00 GMT+0300 (Arabian Standard Time)']

    // console.log('........... CHECK THE DATES ..............', fakeDatas.includes(new Date() + 1))


    // console.log('fakeDatas', fakeDatas)

    // const [selectedDate, setSelectedDate] =  useState();


    // console.log(date)
    const onChange = (e) => {
        setDate(e)
        // console.log(e, 'eeeeeeeeeee')
        // serach on DB 
        // const found = fakeData.find(ele => ele = e )
        // const selectedDate = fakeData.filter(ele => ele.date == e);
        // console.log('find=>', selectedDate)
        setAvalibleTimes(defaultAvailableTimes)
        // console.log('.............. activeStartDate ...............', activeStartDate)

        // if (fakeData.fi(e))
        // {
        //     console.log('e from the function is',e)
        // }

    }

    const [looding, setLoading] = useState(false)
    const [image, setImage] = useState('')


    const uploadAttachmentHanler = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'advisor')
        setLoading(true)
        
        const res = await fetch('https://api.cloudinary.com/v1_1/dhrisbwmj/image/upload',{
            method: 'POST',
            body:data
        })

        const file = await res.json()
        console.log(file)
        
        setImage(file.secure_url)
        setLoading(false)
    }
    const onChangeInput = ({ target: { name, value } }) => {
        setStudy({ ...study, [name]: value });
    };

    const onSubmit = () => {
        console.log('You are submitting', 'date', date, 'time', time, 'study', study, 'userInfo', userInfo._id)


        // add axios 
        axios.post(`${API_URL}/api/appointments/new`, { date, time, topic: study.topic, details: study.details, budget: study.budget, service: 'feasibility study',attachment:image, user: userInfo._id,NumOfMeeting ,typeOfAppointment:"consultation" })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));

        toast.info(' Appointment Booked successfully ', {
            position: "top-right",
            autoClose: 2,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
        });
        history.push("/profile");

    }
    // console.log('onchange date', date)
    // console.log('onchange time', avalibleTimes)
    return (
        <>
            <div>
                <Section>
                    <Container className="d-flex align-items-center mt-4">
                        <Row className="w-100">
                            <Col sm={3}>
                                <Card className="card text-center">
                                    <Calendar
                                        onChange={onChange}
                                        date={date}

                                    // tileDisabled={({date, view}) =>
                                    // (view === 'month') && // Block day tiles only
                                    // fakeDatas.some(disabledDate =>
                                    //   date.getFullYear() === disabledDate.getFullYear() &&
                                    //   date.getMonth() === disabledDate.getMonth() &&
                                    //   date.getDate() === disabledDate.getDate()
                                    // )}

                                    />
                                    {/* <Calendar startDate={startDate} onChange={onChange} /> */}
                                </Card>
                            </Col>
                            <Col sm={3} >
                                <Times times={avalibleTimes} getTime={setTime} />
                            </Col>
                            <Col sm={6} >
                                <Card className="card">
                                    <Col className="py-4 p-2">
                                        <h4 className="text-center" >Feasibility Study Form</h4>
                                        <Col className="mt-3 d-flex flex-row justify-content-center font-weight-bold">
                                            <Form>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Topic</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter topic"
                                                            name="topic"
                                                            onChange={(e) => onChangeInput(e)}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Label>budget</Form.Label>
                                                        <Form.Control as="select"
                                                            defaultValue="Choose..."
                                                            onChange={(e) => onChangeInput(e)}
                                                            name="budget"
                                                        >
                                                            <option value='1'>Less than 50.000</option>
                                                            <option value='2'>50.000 - 250.000</option>
                                                            <option value='3'>More than 250.000</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                </Form.Row>

                                                

                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Details</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        name="details"
                                                        onChange={(e) => onChangeInput(e)}
                                                    />
                                                </Form.Group>

                                                <Button
                                                    variant="dark"
                                                    // type="submit"
                                                    onClick={(e) => { onSubmit(e) }}
                                                >
                                                    Submit
                                        </Button>
                                            </Form>

                                        </Col>
                                    </Col>
                                </Card>

                            </Col>
                        </Row>

                    </Container>
                </Section>
            </div>
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
    )
}
