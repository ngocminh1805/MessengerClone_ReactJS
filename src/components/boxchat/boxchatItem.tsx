import * as React from 'react';
import './boxchatItem.css'
import Image from '../../assets/image.jpg'
import moment from 'moment'

interface Props {
    id: number
    userName: string
    message: string
    time: Date
}


class BoxchatItem extends React.Component<Props>{

    constructor(props: Props) {
        super(props)
    }

    render() {

        const { id, userName, message, time } = this.props

        return (
            <div className={'boxchatItem'}>
                <div className='avatar'>
                    <img src={Image} height={50} width={50} />
                </div>
                <div className={'content'} >
                    <span>{userName}</span>
                    <div className={'message'}>
                        <span> {message} </span>
                         .
                        <span> {moment(time).format('LT')} </span>
                    </div>

                </div>
            </div>
        )
    }


}

export default BoxchatItem