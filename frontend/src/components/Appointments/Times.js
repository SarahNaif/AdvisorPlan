import React from 'react'
import { Container, Row, Card, ListGroup, Col } from 'react-bootstrap'

export default function Times({ times, getTime }) {

  const onClick = (e) => 
  {
    console.log('e......... in TIMES',e.target.innerText)
    getTime(e.target.innerText)
  }


  const appointments = times.map(ele => {
    return <ListGroup.Item as="li" className="li" onClick={(e) => { onClick(e) }} value={ele.toString()}>
      <span className="font-weight-bold">{ele}</span>
      <div>
        <span className="mr-1"></span>
        <i className="fa fa-clock-o"></i>
      </div>
    </ListGroup.Item>
  })

  return (
    <Card>
      <ListGroup as="ul" className="list-unstyled list">
        {appointments ? appointments : 'No avalible times'}
      </ListGroup>

    </Card>

  )
}
