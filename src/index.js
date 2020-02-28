import React from 'react';
import ReactDOM from 'react-dom';
import GalleryApp from './GalleryApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.scss';

ReactDOM.render(
    <GalleryApp />,
    document.getElementById("gallery-app")
);
