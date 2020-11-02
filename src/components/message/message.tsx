import * as React from 'react';
import './message.scss'
import '../../mySass.scss'

interface Props {
    isMine: boolean
    userName: string
    message:string,
    id:number
}

interface State {
    background:string
}

class Message extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            background:''
        }
    }

    componentDidMount(){
        if(!this.props.isMine){
            this.setState({background: '#e6e7e7'})
        }
    }


    render() {
        const { isMine, userName } = this.props
        return (
            <div className='container' style={{ alignItems: isMine ? "flex-end" : "flex-start" }}>
                <span className='userName'>
                    {isMine? 'Bạn' : userName}
                </span>
                <div className='message_container' style={{
                    backgroundColor: this.state.background,
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