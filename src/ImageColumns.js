import React from 'react';
import ImageColumn from './ImageColumn';

function ImageColumns(props) {

    const { images } = props;

    const imagesPerColumn = [3, 2, 3, 2];

    var from = 0;

    const imageColumns = imagesPerColumn.map((totalImages, index) => {
        const to = from + totalImages;
        const el = <ImageColumn key={index} images={images.slice(from, to)} />
        from = to;
        return el;
    });

    return (
        <div className="row">{imageColumns}</div>
    );
}

export default ImageColumns;