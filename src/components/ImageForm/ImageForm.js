import React, { Component } from 'react';
//set up an image form to take in a new path and description to add to the gallery
//this will use props passed in from the app and is a direct child of the App
class ImageForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.addPic}>
                <input name="path" type="text" placeholder="URL" value={this.props.newImage.path} onChange={this.props.handleChange} required/>
                <input name="description" type="text" placeholder="Description" value={this.props.newImage.description} onChange={this.props.handleChange} required />
                <input type="submit"/>
            </form>
        );
    }
}

export default ImageForm