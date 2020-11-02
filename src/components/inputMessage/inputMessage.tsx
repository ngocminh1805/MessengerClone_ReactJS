import * as React from 'react';
import './inputMessage.scss'
import { IoMdAddCircle, RiStickyNoteFill, RiFileGifFill, BsImageFill,AiTwotoneLike, FaSmile } from 'react-icons/all'

class InputMessage extends React.Component {

    onclick = () => {
        alert('onclick')
    }

    render() {
        return (
            <div className='inputMessage_container'  >
                <div style={{ marginRight: 10 }}>
                    <IoMdAddCircle className='inputMessage_icon' onClick = {this.onclick}/>
                    <RiFileGifFill className='inputMessage_icon' onClick = {this.onclick}/>
                    <RiStickyNoteFill className='inputMessage_icon' onClick = {this.onclick}/>
                    <BsImageFill className='inputMessage_icon' onClick = {this.onclick}/>

                </div>
                <div className = 'input_message'>
                <input className='input_text'
                    placeholder='Nhập tin nhắn, @name...'/>
                    <FaSmile className = 'inputMessage_icon'/>
                </div>
                <AiTwotoneLike className = 'inputMessage_icon' onClick = {this.onclick}/>
            </div>
        )
    }
}

export default InputMessage