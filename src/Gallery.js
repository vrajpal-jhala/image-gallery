import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props) {

    var { images, windowWidth } = props;

    var totalItems = 12;

    var cols = 0, leftIncr = 0;
    var leftToRight = true;

    if (windowWidth >= 1200) {
        cols = 4;
        leftIncr = 25.25;
    } else if (windowWidth >= 992) {
        cols = 3;
        leftIncr = 34.25;
    } else if (windowWidth >= 768) {
        cols = 2;
        leftIncr = 52.5;
    } else {
        cols = 1;
        leftIncr = 0;
    }

    var rows = totalItems / cols, left = 0, cnt = 0, colNo = 0;
    var prevColsHeights = [0, 0, 0, 0];
    var colWidth = (windowWidth - (cols === 1 ? 30 : 80)) / cols;

    images = props.images.map((image, index) => {
        var divisor = image.width / colWidth;
        var height = image.height / divisor;

        if (leftToRight === false && cnt > rows - 1) {
            cnt = 0;
            left += leftIncr;
            colNo++;
        }

        if (colNo > cols - 1) {
            colNo = 0;
            left = 0;
        }

        const element = (<GalleryItem key={index} url={image.urls.small} userName={image.user.name} userLocation={image.user.location}
            width={colWidth} height={height} left={left} top={prevColsHeights[colNo]} />);

        prevColsHeights[colNo] += height + 8;
        if (leftToRight) {
            colNo++;
            left += leftIncr;
        } else {
            cnt++;
        }

        return element;
    });

    const gridStyle = {
        height: Math.max(...prevColsHeights)
    };

    return (
        <div className="container-fluid">
            <div className="masonry-grid" style={gridStyle}>{images}</div>
        </div>
    );
}

export default Gallery;
