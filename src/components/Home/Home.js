import React, { Component } from 'react';
import GalleryList from '../App/GalleryList/GalleryList.js';
import ImageForm from '../ImageForm/ImageForm.js';


//set up a class for the gallery list this will map over props passed in from the App, it will return a GalleryItem for 
//each img of the this.props.images.map GalleryList is a direct child of the App and is called on the App
class Home extends Component {
    render() {
        return (
            <div>
                <ImageForm newImage={this.props.newImage} handleChange={this.props.handleChange} addPic={this.props.addPic} /><br></br><br></br>
                <GalleryList images={this.props.images} postLike={this.props.postLike} postHeart={this.props.postHeart} handleDelete={this.props.handleDelete} />
            </div>
        );
    }
}

export default Home;