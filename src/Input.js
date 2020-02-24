import React from 'react';

function Input(props) {

    const { isVisible, onUserInput, query } = props;

    return (
        <div className={'search ' + (isVisible ? '' : 'hide')} >
            <input
                type="text"
                className="form-control"
                placeholder="Search images..."
                onChange={onUserInput}
                value={query}
            />
        </div>
    );
}

export default Input;
