import * as React from 'react';
import './searchbar.scss'
import {BsSearch} from 'react-icons/all'

class SearchBar extends React.PureComponent {
    render() {
        return (
            <div className='container_searchbar'>
                <span className='input'>
                    <label className='searchbar'>
                        <BsSearch/>
                        <input className='inputtext'
                               type='text'
                               placeholder = 'Tìm Kiếm'
                               spellCheck = "false"/>
                    </label>
                </span>
            </div>
        )
    }


}

export default SearchBar