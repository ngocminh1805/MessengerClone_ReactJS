import * as React from 'react';
import BoxchatItem from './boxchatItem'
import './boxchatList.css'


class BoxchatList extends React.Component {

    data = [
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() },
        { id: Math.random(), userName: 'Minh Bé Tí', message: 'message', time: new Date() }]

    listItem = this.data.map(item =>
        <li key={item.id.toString()}>
            <BoxchatItem
                id={item.id}
                userName={item.userName}
                message={item.message}
                time={item.time} />
        </li>
    )

    render() {
        return (
            <ul>
                {this.listItem}
            </ul>

        )
    }


}

export default BoxchatList