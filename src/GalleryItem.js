import React from 'react'
import './galleryitem.scss';

function GalleryItem(props) {

    const { url, userName, userLocation } = props;

    return (
        <div className="image">
            <img src={url} alt={userName} />
            <div className="user-info">
                <h1>{userName}</h1>
                <h4>{userLocation}</h4>
            </div>
        </div>
    );

}

export default GalleryItem
