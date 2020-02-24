import React from 'react';
import './searchbar.scss'
import Heading from './Heading';
import Input from './Input';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.changeTimerId = 0;

        this.state = {
            isVisible: false,
            value: ''
        }
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });

        if (this.changeTimerId)
            clearTimeout(this.changeTimerId);

        this.changeTimerId = setTimeout(() => {
            this.props.onUserInput(this.state.value);
            this.changeTimerId = null;
        }, 500);
    }

    toggleSearch = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible,
            value: this.state.isVisible ? this.state.value : ''
        }));

        this.props.onUserInput('');
    }

    render() {
        return (
            <div className="container py-4" >
                <div className="row">
                    <div className="col">
                        <div className="border p-3">
                            <Heading isVisible={this.state.isVisible} toggleSearch={this.toggleSearch} />
                            <Input isVisible={this.state.isVisible} onChange={this.onChange} value={this.state.value} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
