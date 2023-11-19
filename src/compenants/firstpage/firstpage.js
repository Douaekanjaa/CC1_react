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
       <Row className={`justify-content-center p-md-3 p-2 h-100 page1${darkMode ? ' dark-mode' : ''}`}>
      {/* Card 1 */}
      <Col xs={12} md={6} className='my-md-3 my-1 '>
        <Card className='shadow'>
          
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is a sample card. You can add any content here.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={12} md={6}  className='my-md-3 my-1'>
        <Card className='shadow'>
         
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              This is another sample card with different content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={12} md={6} className='my-md-3 my-1'>
        <Card className='shadow'>
        
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              Add your own content for the third card here.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col xs={12} md={6} className='my-md-3 my-1'>
        <Card className='shadow'>
          <Card.Body>
          {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
         
            <Card.Title>Card 4</Card.Title>
            <Card.Text>
              Customize the content for the fourth card as needed.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row> 
    </div>
  )
}
