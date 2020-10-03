import React, { Component } from 'react';

class ImageForm extends Component {
    render() {
        return (
            <form>
                <input name="path" type="text" placeholder="URL" value={this.props.newImage.path} onChange={this.props.handleChange}/>
                <input name="description" type="text" placeholder="Description" value={this.props.newImage.description} onChange={this.props.handleChange} />
                <input type="submit" onClick={this.props.addPic} />
            </form>
        );
    }
}

export default ImageForm