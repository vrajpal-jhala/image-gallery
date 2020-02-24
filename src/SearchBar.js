import React from 'react';
import './searchbar.scss'
import Heading from './Heading';
import Input from './Input';

function SearchBar(props) {

    const { isVisible, toggleSearch, onUserInput, query } = props;

    return (
        <div className="container py-4" >
            <div className="row">
                <div className="col">
                    <div className="border p-3">
                        <Heading isVisible={isVisible} toggleSearch={toggleSearch} />
                        <Input isVisible={isVisible} onUserInput={onUserInput} query={query} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
