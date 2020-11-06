import * as React from 'react';
import './message.scss'
import '../../../mySass.scss'

interface Props {
    isMine: boolean
    userName: string
    message:string,
    id:number
    color?:string
}

interface State {
    background?:string
}

class Message extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            background:''
        }
    }

    componentDidMount(){
        if(this.props.isMine){
            this.setState({background:this.props.color})
            
        }else{
            this.setState({background: '#e6e7e7'})
        }
    }


    render() {
        const { isMine, userName } = this.props
        console.log('message item color', this.props.color);
        
        return (
            <div className='container' style={{ alignItems: isMine ? "flex-end" : "flex-start" }}>
                <span className='userName'>
                    {isMine? 'Bạn' : userName}
                </span>
                <div className='message_container' style={{
                    backgroundColor: isMine? this.props.color: '#e6e7e7'  ,
                    color: isMine ? '#fff' : '#000'
                }}>
                    <p>
                        this is my message
                </p>
                </div>
            </div>

        )
    }
}

export default Message