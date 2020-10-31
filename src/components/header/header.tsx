import * as React from 'react';
import './header.css';
import avatar from '../../assets/image.jpg'


class Header extends React.Component {
    render() {
        return (
            <div className = 'container_header'>
                <img className = 'avatar' src = {avatar}/>
                <span className = 'userName_header'> Minh Bé Tí </span>
            </div>
        )
    }
}

export default Header  