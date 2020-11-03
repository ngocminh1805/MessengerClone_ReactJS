import * as React from 'react';
import Message from './message';
import './listMessage.scss'

interface Props{
    color?:string
}

interface State{
    color?:string
}


class ListMessage extends React.Component<Props,State> {

    // constructor(props:Props){
    //     super(props)

    //     this.state = {
    //         color:''
    //     }
    // }

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

    renderItem = () =>{
        return(
            this.data.map(item =>
                <li key={item.id.toString()}>
                    <Message id={item.id}
                        userName={item.userName}
                        message={item.message}
                        isMine={item.isMine}
                        color = {this.props.color} />
                </li>

        ) )
    } 
    
  
    render() {
        console.log('list message color', this.props.color);
        
        return (
            <ul>
                {this.renderItem()}
            </ul>
        )
    }


}

export default ListMessage