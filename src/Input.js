import React from 'react';

function Input(props) {

    const { isVisible, onChange, value } = props;

    return (
        <div className={'search ' + (isVisible ? '' : 'hide')} >
            <input
                type="text"
                className="form-control"
                placeholder="Search images..."
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Input;
