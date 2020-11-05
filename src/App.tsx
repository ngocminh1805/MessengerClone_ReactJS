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
import MyChart from './components/chart/chart';
import YourChart from './components/chart/newchart';
import DatePicker from './components/datepicker/datePicker';
import Accordion from './components/accordion/Accordion';


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

  // data test chart

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

  data2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  // get random color
  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // click to change color

  onClick = () => {
    this.setState({ color: this.getRandomColor() })
  }


  // render screen
  render() {
    console.log('color', this.state.color);

    return (
      <Container fluid style={{ height: 500 }}>
        <Row>

          {/* column left */}
          <Col className='col1' style={{ height: window.innerHeight }}>
            <SearchBar />
            <BoxchatList />
          </Col>

          {/* column center and rright*/}
          <Col className='col2'>

            {/* message header bar */}
            <Header color={this.state.color} />
            <Row className='row2'>

              {/* column center */}
              <Col className='col3' style={{ height: window.innerHeight - 56 }}>
                <div style={{ height: window.innerHeight - 112, overflow: "hidden", overflowY: "scroll" }}>
                  <ListMessage color={this.state.color} />
                </div>
                <div>
                  <InputMessage color={this.state.color} />
                </div>
              </Col>

              {/* column right */}
              <Col className='col4' style={{ height: window.innerHeight - 56 }}>
                <ProfileBox />
                <Dropbox title='hành động khác' />
                <Dropbox title='mọi người' />
                <Dropbox title='quyền riêng tư & hỗ trợ' />
                <Dropbox title='tệp được chia sẻ' />
                <Dropbox title='ảnh được chia sẻ' />
                {/* <MyChart
                  id='chart1'
                  type='bar'
                  data={this.data}
                  options={{
                    maintainAspectRatio: false
                  }}
                 
                />
                <MyChart
                  id='chart2'
                  type='pie'
                  data={this.data2}
                  height={400}
                  width={400}
                /> */}
                <YourChart
                id='chart1'
                type='bar'
                data={this.data}
                options={{
                  maintainAspectRatio: false
                }}
                 />

                <DatePicker/>
                <Accordion/>
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
