import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component {
    render() {
        return (
            <div className="gallery-list">
                {this.props.images.map(img => <GalleryItem key={img.id} img={img}/>)}
            </div>
        );
    }
}

export default GalleryList;