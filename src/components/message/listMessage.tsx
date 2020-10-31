import * as React from 'react';
import Message from './message';


class ListMessage extends React.Component {

    data = [{ id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
    { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
    { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: true },
    { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false },
    { id: Math.random(), userName: 'Minh Bé Tí', message: 'this is message 1', isMine: false},
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


    renderItem = this.data.map(item => 
        <li key={item.id.toString()}>
            <Message id={item.id}
                userName={item.userName}
                message={item.message}
                isMine={item.isMine} />
        </li>
    )

    render() {
        return (
            <ul>
                {this.renderItem}

            </ul>

        )
    }


}

export default ListMessage