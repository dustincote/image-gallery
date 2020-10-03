import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    render() {
        return (
            <div key={this.props.img.id} className="gallery-item">
                <img className="gallery-image" src={this.props.img.path} alt={this.props.img.description}/>

            </div>
        );
    }
}

export default GalleryItem;
