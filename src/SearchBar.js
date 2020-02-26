import React from 'react';
import Heading from './Heading';
import Input from './Input';

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
        
        this.props.onChange(new Event('change'));
    }

    render() {
        const { onChange } = this.props;

        return (
            <div className="container py-4" >
                <div className="row">
                    <div className="col">
                        <div className="border p-3">
                            <Heading isVisible={this.state.isVisible} toggleSearch={this.toggleSearch} />
                            {this.state.isVisible && <Input onChange={onChange} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
