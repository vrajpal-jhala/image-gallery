import React from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

class GalleryApp extends React.Component {

    constructor(props) {
        super(props);

        this.axios = require('axios').default;

        this.state = {
            images: [],
            query: '',
            searchEnabled: false,
            error: false
        }
    }

    apiCall = (url, query) => {
        this.axios({
            method: 'GET',
            url: url,
            responseType: 'json'
        }).then((response) => {
            this.setState({
                images: query === '' ? response.data : response.data.results,
                query: query,
                error: false
            });
        }).catch((error) => {
            this.setState({
                images: [],
                query: query,
                error: true
            });
        });
    }

    componentDidMount() {
        this.listImages();
    }

    listImages() {
        this.apiCall('https://api.unsplash.com/photos/?client_id=8HurEgRguetU5fAYBS1-_LSot8G_p3PcUCZjPVyuWws', '');
    }

    searchImages = (query) => {
        this.apiCall('https://api.unsplash.com/search/photos/?client_id=8HurEgRguetU5fAYBS1-_LSot8G_p3PcUCZjPVyuWws&query=' + query, query);
    }

    onChange = (event) => {
        const query = event.target.value;
        if (query === '')
            this.listImages();
        else
            this.searchImages(query);
    }

    toggleSearch = () => {
        this.setState(prevState => ({
            searchEnabled: !prevState.searchEnabled,
            query: this.state.searchEnabled ? this.state.query : ''
        }));
    }

    render() {
        return (
            <div>
                <SearchBar toggleSearch={this.toggleSearch} onUserInput={this.onChange} isVisible={this.state.searchEnabled} query={this.state.query} />
                <Gallery images={this.state.images} />
            </div >
        );
    }
}

export default GalleryApp;
