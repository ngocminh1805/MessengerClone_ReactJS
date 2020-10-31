import * as React from 'react';
import './message.css'

interface Props {
    isMine: boolean
    userName: string
    message:string,
    id:number
}

interface State {
    style: any
   

}

class Message extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }


    render() {
        const { isMine, userName } = this.props
        return (
            <div className='container' style={{ alignItems: isMine ? "flex-end" : "flex-start" }}>
                <span className='userName'>
                    {isMine? 'Bạn' : userName}
                </span>
                <div className='message_container' style={{
                    backgroundColor: isMine ? '#0099ff' : ' #e6e7e7',
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