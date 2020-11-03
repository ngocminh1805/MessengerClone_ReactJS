import React, { Component } from 'react';
import Header from './components/header/header'
import BoxchatList from './components/boxchat/boxchatList'
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/search_bar/searchbar';
import ListMessage from './components/message/listMessage';
import ProfileBox from './components/profileBox/profilebox';
import Dropbox from './components/dropbox/Dropbox';
import InputMessage from './components/inputMessage/inputMessage';
import Chart from './components/chart/chart';


interface Props {

}

interface State {
  color: string
}



class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      color: ''
    }
  }

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  onClick = () => {
    this.setState({ color: this.getRandomColor() })
  }

  render() {
    console.log('color', this.state.color);
    
    return (
      <Container fluid style={{ height: 500 }}>
        <Row>
          <Col className='col1' style={{ height: window.innerHeight }}>
            <SearchBar />
            <BoxchatList />
          </Col>
          <Col className='col2'>
            <Header color = {this.state.color} />
            <Row className='row2'>
              <Col className='col3' style={{ height: window.innerHeight - 56 }}>
                <div style={{ height: window.innerHeight - 112, overflow: "hidden", overflowY: "scroll" }}>
                  <ListMessage color = {this.state.color} />
                </div>
                <div>
                  <InputMessage color = {this.state.color} />
                </div>
              </Col>
              <Col className='col4' style={{ height: window.innerHeight - 56 }}>
                <ProfileBox />
                <Dropbox title='hành động khác' />
                <Dropbox title='mọi người' />
                <Dropbox title='quyền riêng tư & hỗ trợ' />
                <Dropbox title='tệp được chia sẻ' />
                <Dropbox title='ảnh được chia sẻ' />
                <Chart/>
              </Col>
            </Row>
          </Col>
        </Row>
        <button className='btn'
          onClick={this.onClick}>
        </button>
      </Container>
    );

  }

}

export default App
