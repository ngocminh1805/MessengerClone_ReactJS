import * as React from 'react';
import Message from './message';
import './listMessage.scss'


class ListMessage extends React.Component {

    data = [
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },]

  // render item

    renderItem = this.data.map(item =>
        <li key={item.id.toString()}>
            <Message id={item.id}
                userName={item.userName}
                message={item.message}
                isMine={item.isMine} />
        </li>
    )
  // load more



    render() {
        return (
            <ul>
                {this.renderItem}
            </ul>
        )
    }


}

export default ListMessage