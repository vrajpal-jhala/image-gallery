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

    onChange = (value) => {
        const query = value;
        if (query === '') {
            this.listImages();
        } else {
            this.searchImages(query);
        }
    }

    render() {
        return (
            <div>
                <SearchBar onUserInput={this.onChange} />
                <Gallery images={this.state.images} />
            </div >
        );
    }
}

export default GalleryApp;
