import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
//set up a class for the gallery list this will map over props passed in from the App, it will return a GalleryItem for 
//each img of the this.props.images.map GalleryList is a direct child of the App and is called on the App
class GalleryList extends Component {
    render() {
        return (
            <div className="gallery-list">
                {this.props.images.map(img => <GalleryItem key={img.id} img={img} postLike={this.props.postLike} postHeart={this.props.postHeart} handleDelete={this.props.handleDelete}/>)}
            </div>
        );
    }
}

export default GalleryList;