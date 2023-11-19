import React from 'react'
import './firstpage.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '../dark_light/ThemeContext';

export default function Firstpage() {
  const { darkMode } = useTheme();
  return (
    <div className={`fg${darkMode ? ' dark-mode' : ''}`}>
       <Row className={`justify-content-center mb-3 p-md-3 p-2 h-100 page1${darkMode ? ' dark-mode' : ''}`}>
      {/* Card 1 */}
      <Col xs={12} md={4} className='my-md-3 my-1 mx-md-3'>
        <Card className='shadow'>
          
          <Card.Body>
          <Card.Img  className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/calculator_img.png`} style={{ width: '77%', height: '290px' }}/>
      
            <Card.Title>TP 1</Card.Title>
            <Card.Text>
              This is a sample card. You can add any content here.
            </Card.Text>
          </Card.Body>
        </Card>

      </Col>

      {/* Card 2 */}
      <Col xs={12} md={4}  className='my-md-3 my-1 mx-md-3'>
        <Card className='shadow'>
         
          <Card.Body>
          <Card.Img  className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/todo_img.png`} style={{ width: '81%', height: '290px' }}/>
            <Card.Title>TP 2</Card.Title>
            <Card.Text>
              This is another sample card with different content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={12} md={4}  className='my-md-3 mx-md-3 my-1'>
        <Card className='shadow'>
         
          <Card.Body>
          <Card.Img  className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/slider_img.png`} style={{ width: '81%', height: '290px' }}/>
            <Card.Title>TP 3</Card.Title>
            <Card.Text>
              This is another sample card with different content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col xs={12} md={4}  className='my-md-3 my-1 mx-md-3'>
        <Card className='shadow'>
         
          <Card.Body>
          <Card.Img  className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/weather_img.png`} style={{ width: '81%', height: '290px' }}/>
            <Card.Title>TP 4</Card.Title>
            <Card.Text>
              This is another sample card with different content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row> 
    </div>
  )
}
