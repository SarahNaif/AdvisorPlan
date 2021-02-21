import { React, useState } from 'react'
// import ReactLightCalendar from '@lls/react-light-calendar'
// import Calendar from '@lls/react-light-calendar'
// import '@lls/react-light-calendar/dist/index.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import '../Style/appointment.css';
import styled from 'styled-components';
import Times from '../components/Appointments/Times'

const Section = styled.div`
padding: 80px 0;
margin-bottom: 36px;
margin-top:50px;
width:100%;
height:auto;
/* background-color:; */

`;

export default function Appointments() {

    const onChangeInput = () => {

    }
    const onSubmit = () => {

    }
    const fakeData =
        [
            {
                date: 'Tue Feb 16 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['09:00 AM', '10:00 AM', '11:00AM']
            },
            {
                date: 'Wed Feb 17 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['10:00 AM', '01:00PM']
            },
            {
                date: 'Thu Feb 18 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['09:00 AM', '10:00 AM', '11:00AM']
            },
            {
                date: 'Fri Feb 19 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['10:00 AM', '01:00PM']
            },
            {
                date: 'Sat Feb 20 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['11:00 AM', '12:00PM']
            },
            {
                date: 'Sun Feb 21 2021 00:00:00 GMT+0300 (Arabian Standard Time)',
                availableTimes: ['12:00 PM']
            }
        ]

    const fakeDatas = [new Date(), new Date(2021, 1, 2), new Date(2021, 1, 4)]
    // const fakeDatas = ['Sun Feb 21 2021 00:00:00 GMT+0300 (Arabian Standard Time)','Sat Feb 20 2021 00:00:00 GMT+0300 (Arabian Standard Time)']
    console.log('........... CHECK THE DATES ..............', fakeDatas.includes(new Date() + 1))


    console.log('fakeDatas', fakeDatas)

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(['No Avalible times']);
    // const [selectedDate, setSelectedDate] =  useState();


    // console.log(date)
    const onChange = (e) => {
        setDate(e)
        console.log(e, 'eeeeeeeeeee')
        // serach on DB 
        // const found = fakeData.find(ele => ele = e )
        const selectedDate = fakeData.filter(ele => ele.date == e);
        console.log('find=>', selectedDate)
        setTime(selectedDate[0].availableTimes)
        // console.log('.............. activeStartDate ...............', activeStartDate)

        // if (fakeData.fi(e))
        // {
        //     console.log('e from the function is',e)
        // }

    }

    console.log('onchange date', date)
    console.log('onchange time', time)
    return (
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
                            <Times times={time} />
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
                                                        name="firstName"
                                                        // value={userInfo.firstName}
                                                        onChange={(e) => onChangeInput(e)}
                                                    />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>budget</Form.Label>
                                                    <Form.Control as="select" defaultValue="Choose...">
                                                        <option>Less than 50.000</option>
                                                        <option>50.000 - 250.000</option>
                                                        <option>More than 250.000</option>

                                                    </Form.Control>
                                                </Form.Group>

                                            </Form.Row>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Attachment</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Example textarea</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>


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

                        </Col>
                    </Row>

                </Container>
            </Section>
        </div>
    )

}
