import React from 'react';

function Input(props) {

    const { onChange } = props;

    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder="Search images..."
                onChange={onChange}
            />
        </div>
    );
}

export default Input;
