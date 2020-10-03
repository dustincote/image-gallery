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
                <button className="like-button" onClick={(e)=>this.props.postLike(this.props.img.id, e)}><span role="img" aria-label="like">👍</span></button>
                {this.props.img.hearts === 1 ? <span aria-label="heart" role="img"><a className="heart" href="https://demo.twilio.com/docs/classic.mp3"> ❤️ </a></span> : <span aria-label="heart" role="img"><button onClick={(e) => this.props.postHeart(this.props.img.id, e)} className="heart">❤️</button></span>}
                <span role="img" aria-label="heart" className="hearts">❤️ {this.props.img.hearts}</span>
                <span role="img" aria-label="like" className="likes">👍 {this.props.img.likes}</span>
                

            </div>
        );
    }
}

export default GalleryItem;
