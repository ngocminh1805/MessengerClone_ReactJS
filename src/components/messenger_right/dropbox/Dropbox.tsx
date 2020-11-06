import * as React from 'react';
import './Dropbox.scss'
import { FiChevronLeft, FiChevronDown } from 'react-icons/all'

interface Props {
    title: string
}

interface State {
    isOpen: boolean
}


class Dropbox extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    listItem = [
        { id: Math.random(), name: 'Tìm kiếm trong cuộc trò chuyện' },
        { id: Math.random(), name: 'Chỉnh sửa biệt danh' },
        { id: Math.random(), name: 'Đổi chủ đề' },
        { id: Math.random(), name: 'Thay đổi biểu tượng cảm xúc' }]




    renderlist = () => {
        if (this.state.isOpen) {
            return (
                <ul>
                    {this.listItem.map(item =>
                        <li className='dropdown-item'>
                            {item.name}
                        </li>)}
                </ul>
            )
        }
        else {
            return null
        }
    }

    renderIcon = () => {
        if (this.state.isOpen) {
            return (
                <FiChevronDown style={{ height: 20, width: 20 }} />
            )
        }
        else {
            return (
                <FiChevronLeft style={{ height: 20, width: 20 }} />
            )
        }
    }

    onClick = () => {
        if (this.state.isOpen) {
            this.setState({ isOpen: false })
        }
        else {
            this.setState({ isOpen: true })
        }
    }


    render() {
        return (
            <div className='dropdown-container' onClick={() => this.onClick()}>
                <div className='dropdownTitle'>
                    <span style={{ flex: 1 }}> {this.props.title} </span>
                    {this.renderIcon()}
                </div>
                {this.renderlist()}


            </div>

        )
    }


}

export default Dropbox 