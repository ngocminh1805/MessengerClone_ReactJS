import React from 'react';
import Header from './components/header/header'
import BoxchatList from './components/boxchat/boxchatList'
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/search_bar/searchbar';
import ListMessage from './components/message/listMessage';
import ProfileBox from './components/profileBox/profilebox';
import Dropbox from './components/dropbox/Dropbox';
import InputMessage from './components/inputMessage/inputMessage';


function App() {
  return (
    <Container fluid style={{ height: 500 }}>
      <Row>
        <Col className='col1' style={{ height: window.innerHeight }}>
          <SearchBar />
          <BoxchatList />
        </Col>
        <Col className='col2'>
          <Header />
          <Row className='row2'>
            <Col className='col3' style={{ height: window.innerHeight - 56 }}>
              <div style={{ height: window.innerHeight - 112 , overflow: "hidden", overflowY: "scroll" }}>
                <ListMessage />
              </div>
              <div>
                <InputMessage />
              </div>
            </Col>
            <Col className='col4' style={{ height: window.innerHeight - 56 }}>
              <ProfileBox />
              <Dropbox title = 'hành động khác' />
              <Dropbox title = 'mọi người' />
              <Dropbox title = 'quyền riêng tư & hỗ trợ' />
              <Dropbox title = 'tệp được chia sẻ' />
              <Dropbox title = 'ảnh được chia sẻ' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App
