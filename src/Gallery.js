import React from 'react';
import ImageColumns from './ImageColumns';

function Gallery(props) {

    const { images } = props;

    return (
        <div className="container-fluid">
            <ImageColumns images={images} />
        </div>
    );
}

export default Gallery;
