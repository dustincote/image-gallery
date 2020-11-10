import React, { Component } from 'react';
//set up a class for the gallery list this will map over props passed in from the App, it will return a GalleryItem for 
//each img of the this.props.images.map GalleryList is a direct child of the App and is called on the App
class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>Here is where we will tell you all about what a great company we are.<br></br> 
                 We really are just a money hungry beast that wants
                    to suck all of the money we can out of every user,<br></br> The more we can get you to use our app the more money we will make, thank you
                    have a great day and don't forget to 👍 and ❤️ our pictures.
                </p>
            </div>
        );
    }
}

export default About;