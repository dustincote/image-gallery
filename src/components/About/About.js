import React, { Component } from 'react';
//set up a class for the gallery list this will map over props passed in from the App, it will return a GalleryItem for 
//each img of the this.props.images.map GalleryList is a direct child of the App and is called on the App
class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
            </div>
        );
    }
}

export default About;