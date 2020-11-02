import * as React from 'react';
import './profilebox.scss'
import avatar from '../../assets/image.jpg'

class ProfileBox extends React.Component{

    render(){
        return(
            <div className = 'profilebox_container'>
                <img src = {avatar} className = 'profilebox_avatar'/>
                <span className = 'profilebox_name'> Minh Bé Tí</span>
            </div>
        )
    }

}

export default ProfileBox

