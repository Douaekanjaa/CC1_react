import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LanguageSelector from '../translation/LanguageSelector';
import { useTheme } from '../dark_light/ThemeContext';
import { useLanguage } from '../translation/LanguageContext';

export default function Firstpage() {
  const { darkMode } = useTheme();
  const { translate, currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className={`fg${darkMode ? ' dark-mode' : ''}`}>
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      <Row className={`justify-content-center mb-3 p-md-3 p-2 h-100 page1${darkMode ? ' dark-mode' : ''}`}>
      
        <Col xs={12} md={4} className='my-md-3 my-1 mx-md-3'>
          <Card className='shadow'>
            <Card.Body>
              <Card.Img className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/calculator_img.png`} style={{ width: '77%', height: '290px' }} />
              <Card.Title>{translate('tp1Title')}</Card.Title>
              <Card.Text>{translate('tp1Description')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='my-md-3 my-1 mx-md-3'>
          <Card className='shadow'>
            <Card.Body>
              <Card.Img className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/todo_img.png`} style={{ width: '81%', height: '310px' }} />
              <Card.Title>{translate('tp2Title')}</Card.Title>
              <Card.Text>{translate('tp2Description')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col xs={12} md={4} className='my-md-3 mx-md-3 my-1'>
          <Card className='shadow'>
            <Card.Body>
              <Card.Img className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/slider_img.png`} style={{ width: '81%', height: '290px' }} />
              <Card.Title>{translate('tp3Title')}</Card.Title>
              <Card.Text>{translate('tp3Description')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>


        <Col xs={12} md={4} className='my-md-3 my-1 mx-md-3'>
          <Card className='shadow'>
            <Card.Body>
              <Card.Img className='mx-4' variant="top" src={`${process.env.PUBLIC_URL}/images/weather_img.png`} style={{ width: '81%', height: '290px' }} />
              <Card.Title>{translate('tp4Title')}</Card.Title>
              <Card.Text>{translate('tp4Description')}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
