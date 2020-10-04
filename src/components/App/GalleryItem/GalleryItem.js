import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
    state={
        display: true
    }

    shouldDisplay = () => this.setState( {display: !this.state.display})
    
    easterEgg = (event) => {
        let audio = new Audio(`https://demo.twilio.com/docs/classic.mp3`)
        audio.play()
        event.stopPropagation()

    }
  

    render() {
      
        return (
            <div onClick={this.shouldDisplay} key={this.props.img.id} className="gallery-item">
                <span >{ this.state.display ? <img className="gallery-image" src={this.props.img.path} alt={this.props.img.description} /> : <p>{this.props.img.description}</p>}</span>
                <button className="like-button" onClick={(e) => this.props.postLike(this.props.img.id, e)}><span role="img" aria-label="like">👍 {this.props.img.likes}</span></button>
                {this.props.img.hearts === 1 ? <span aria-label="heart" role="img"><button onClick={this.easterEgg} className="heart">❤️ {this.props.img.hearts}</button></span> : <span aria-label="heart" role="img"><button onClick={(e) => this.props.postHeart(this.props.img.id, e)} className="heart">❤️ {this.props.img.hearts}</button></span>}
                <button onClick={(event) => this.props.handleDelete(this.props.img.id)} >delete</button>
                

            </div>
        );
    }
}

export default GalleryItem;
