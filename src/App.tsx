import React from 'react';
import Header from './components/header/header'
import BoxchatList from './components/boxchat/boxchatList'
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/search_bar/searchbar';
import Message from './components/message/message';
import ListMessage from './components/message/listMessage';
function App() {
  return (
    <Container fluid style = {{maxWidth:1920,maxHeight:1080}}>
      <Row>
        <Col className='col1'>
          <SearchBar/>
          <BoxchatList />
        </Col>
        <Col className='col2'>
          <Header />
          <Row className = 'row2'>
            <Col className = 'col3'>
                <ListMessage/> 
               </Col>
            <Col className = 'col4'> 000</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App
