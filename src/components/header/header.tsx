import * as React from 'react';
import './header.scss';
import avatar from '../../assets/image.jpg'
import { IoIosCall, BsCameraVideoFill, BsInfoCircleFill } from 'react-icons/all'


class Header extends React.Component {
    render() {
        return (
            <div className='container_header'>
                <div style = {{flex:1}}>
                    <img className='avatar' src={avatar} />
                    <span className='userName_header'> Minh Bé Tí </span>
                </div>
                <div>
                    <IoIosCall className='header_icon' />
                    <BsCameraVideoFill className='header_icon' />
                    <BsInfoCircleFill className='header_icon' />


                </div>
            </div>
        )
    }
}

export default Header  