import React from 'react';

function Heading(props) {

    const { isVisible, toggleSearch } = props;

    return (
        <div className="input-group mb-2">
            <span className="form-control border-0">Image Search</span>
            <span className="input-group-append">
                <button className="btn btn-outline-dark rounded" onClick={toggleSearch}>
                    <i className={"fas fa-fw " + (isVisible ? 'fa-times' : 'fa-search')}></i>
                </button>
            </span>
        </div>
    );
}

export default Heading;
