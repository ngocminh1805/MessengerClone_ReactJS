import React from 'react';
import Header from './components/header/header'
import BoxchatList from './components/boxchat/boxchatList'
import './App.css';
import { Container, Row, Col } from 'reactstrap';
function App() {
  return (
    <Container fluid>
      <Row>
        <Col className='col1'>
          <BoxchatList />
        </Col>
        <Col className='col2'>
          <Header />
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App
