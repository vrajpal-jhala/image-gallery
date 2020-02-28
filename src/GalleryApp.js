import React from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

class GalleryApp extends React.Component {

    constructor(props) {
        super(props);

        this.axios = require('axios').default;
        this.delayedTimerId = 0;
        this.searchTimerId = 0;

        this.state = {
            images: [],
            query: '',
            pageNo: 1,
            hasMore: true,
            noResult: false,
            error: false
        }
    }

    apiCall = (url, query) => {
        this.axios({
            method: 'GET',
            url: url,
            responseType: 'json'
        }).then((response) => {
            const currResponse = this.state.images, data = response.data;
            var newResponse, noResult = false, hasMore = false;

            if (query === '') {
                hasMore = true;
                newResponse = data;
            } else {
                data.total_pages === 0 ? noResult = true : this.state.pageNo >= data.total_pages ? hasMore = false : hasMore = true;
                newResponse = data.results;
            }

            var finalResponse = currResponse.concat(newResponse);
            this.setState({
                images: finalResponse,
                query: query,
                hasMore: hasMore,
                noResult: noResult,
                error: false
            });
        }).catch((error) => {
            this.setState({
                images: [],
                query: query,
                hasMore: false,
                noResult: true,
                error: true
            });
        });
    }

    trackScrolling = () => {
        var element = document.documentElement;
        if ((element.scrollHeight - Math.round(element.scrollTop + element.clientHeight)) < 30) {
            if (this.delayedTimerId)
                clearTimeout(this.delayedTimerId);

            this.delayedTimerId = setTimeout(() => {
                this.delayedCallback();
            }, 500);
        }
    };

    delayedCallback = () => {
        this.setState({
            pageNo: this.state.pageNo + 1
        });

        this.state.query === '' ? this.listImages() : this.searchImages(this.state.query);
    }

    windowResized = () => {
        this.setState({
            windowWidth: window.innerWidth
        });
    }

    componentDidMount() {
        this.listImages();
        this.windowResized();
        window.addEventListener('resize', this.windowResized);
        window.addEventListener('scroll', this.trackScrolling);
    }

    listImages() {
        this.apiCall('https://api.unsplash.com/photos/?client_id=8HurEgRguetU5fAYBS1-_LSot8G_p3PcUCZjPVyuWws&per_page=12&page='
            + this.state.pageNo, '');
    }

    searchImages = (query) => {
        this.apiCall('https://api.unsplash.com/search/photos/?client_id=8HurEgRguetU5fAYBS1-_LSot8G_p3PcUCZjPVyuWws&per_page=12&page='
            + this.state.pageNo + '&query=' + query, query);
    }

    onChange = (event) => {
        this.setState({
            images: [],
            pageNo: 1
        });

        const query = event.target === null ? this.state.query : event.target.value;

        if (this.searchTimerId)
            clearTimeout(this.searchTimerId);

        this.searchTimerId = setTimeout(() => {
            query === '' ? this.listImages() : this.searchImages(query);
        }, 500);
    }

    render() {
        return (
            <div>
                <SearchBar onChange={this.onChange} />
                <Gallery images={this.state.images} windowWidth={this.state.windowWidth} />
                <div className="text-center py-2">
                    {
                        this.state.hasMore && <span className="spinner-border text-primary" role="status"></span>
                    }
                    {
                        this.state.noResult
                        && <div className="row">
                            <div className="col">
                                <h1 className="text-center">No Results Found</h1>
                            </div>
                        </div>
                    }
                </div>
            </div >
        );
    }
}

export default GalleryApp;
