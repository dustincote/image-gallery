import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    state={
        display: true
    }

    shouldDisplay = () => this.setState( {display: !this.state.display})
    

    render() {
      
        return (
            <div onClick={this.shouldDisplay} key={this.props.img.id} className="gallery-item">
                <span >{ this.state.display ? <img className="gallery-image" src={this.props.img.path} alt={this.props.img.description} /> : <p>{this.props.img.description}</p>}</span>
                <button className="like-button" onClick={(e)=>this.props.postLike(this.props.img.id, e)}><span>👍</span></button>
                <a className="heart" href="https://demo.twilio.com/docs/classic.mp3">❤️</a>
                <span className="likes">Likes: {this.props.img.likes}</span>

            </div>
        );
    }
}

export default GalleryItem;
