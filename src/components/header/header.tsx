import * as React from 'react';
import './header.scss';
import avatar from '../../assets/image.jpg'
import { IoIosCall, BsCameraVideoFill, BsInfoCircleFill } from 'react-icons/all'

interface Props{
    color?:string
}


class Header extends React.Component<Props> {

    render() {
        return (
            <div className='container_header'>
                <div style = {{flex:1}}>
                    <img className='avatar' src={avatar} />
                    <span className='userName_header'> Minh Bé Tí </span>
                </div>
                <div className = 'headerIcon_container' style = {{color:this.props.color}}>
                    <IoIosCall className='header_icon' />
                    <BsCameraVideoFill className='header_icon' />
                    <BsInfoCircleFill className='header_icon' />
                </div>
            </div>
        )
    }
}

export default Header  