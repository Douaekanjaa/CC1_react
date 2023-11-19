import React from 'react';
import enFlag from './eng.png';
import frFlag from './fr.png';
import { Container, Row, Col, Card } from 'react-bootstrap';


const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  return (
    <Row className='justify-content-start' >
        <Col xs={2} md={1}  >
            <button
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            onClick={() => onLanguageChange('en')}
           
            >
                <img src={enFlag} alt="English Flag" style={{ width: '40px', height: '40px' }} />
            </button>
        </Col>
     

        <Col xs={1} md={1} >
            <button
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    onClick={() => onLanguageChange('fr')}
            >
                <img src={frFlag} alt="French Flag" style={{ width: '40px', height: '40px' }} />
            </button>
        </Col>
      
    </Row>
  );
};

export default LanguageSelector;
