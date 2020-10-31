import * as React from 'react';
import './searchbar.css'

class SearchBar extends React.PureComponent {
    render() {
        return (
            <div className='container'>
                <span className='input'>
                    <label className='searchbar'>
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