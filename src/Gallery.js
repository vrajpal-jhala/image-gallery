import React from 'react';
import GalleryColumn from './GalleryColumn';

function Gallery(props) {

    const { images } = props;

    var imagesPerColumn = [];
    const maxImagesInColumn = images.length / 4;

    for (var from = 0, to = maxImagesInColumn; from < images.length;) {
        imagesPerColumn.push({
            from: from,
            to: to
        });

        from = to;
        to = from + maxImagesInColumn;
    }

    const galleryColumns = imagesPerColumn.map((range, index) =>
        <GalleryColumn key={index} images={images.slice(range.from, range.to)} />
    );

    return (
        <div className="container-fluid">
            <div className="row">{galleryColumns}</div>
        </div>
    );
}

export default Gallery;
