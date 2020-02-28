import React from 'react';
import "./searchbar.scss";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
    }

    toggleSearch = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible,
        }));
    }

    render() {
        const { onChange } = this.props;

        return (
            <div className="container py-4" >
                <div className="row">
                    <div className="col">
                        <div className="border p-3">
                            <div className="row text-center">
                                <div className="col-md-6 h2 mb-md-0 text-md-left text-danger">Brand Name</div>
                                <div className="col-md-6 text-md-right">
                                    <input type="text" className={"search-bar " + (this.state.isVisible ? 'show' : 'hide')} placeholder="Search images..."
                                        onChange={onChange} />
                                    <button className="search-btn" onClick={this.toggleSearch}>
                                        <i className='fas fa-fw fa-search'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
