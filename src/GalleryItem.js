import React from 'react'
import './galleryitem.scss';

function GalleryItem(props) {

    const { url, userName, userLocation, width, height, left, top } = props;

    const imageStyle = {
        height: height + 'px',
        width: width + 'px',
        display: 'inline-block',
        position: 'absolute',
        left: left + '%',
        top: top
    };

    return (
        <div className="image" style={imageStyle}>
            <img src={url} alt={userName} />
            <div className="user-info">
                <div className="h1">{userName}</div>
                <div className="h4">{userLocation}</div>
            </div>
        </div>
    );

}

export default GalleryItem
