import React from 'react';
import GalleryItem from './GalleryItem';

function GalleryColumn(props) {

    let { images } = props;

    images = props.images.map((image, index) =>
        <GalleryItem key={index} url={image.urls.small} userName={image.user.name} userLocation={image.user.location} />
    );

    return (
        <div className="col-md-3 col-sm-6 col-12">{images}</div>
    );
}

export default GalleryColumn;
