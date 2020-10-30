import * as React from 'react';
import './header.css';
import Searchbar from '../search_bar/searchbar'
import { Container, Row, Col } from 'reactstrap'

class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <h3>Đây là header</h3>
            </div>
        )
    }
}

export default Header  