import React, { Component } from 'react';
import './GalleryItem.css'
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete'


//set up the GalleryItem class this will take in props from the GalleryList it will set up all the buttons on the images
//it will conditional render either the picture or the description based on local state which we will toggle with shouldDisplay
//we also include a fun easter egg so make sure to give a picture 2 hearts......
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
                <Button className="like-button" onClick={(e) => this.props.postLike(this.props.img.id, e)}><span role="img" aria-label="like">👍 {this.props.img.likes}</span></Button>
                {this.props.img.hearts === 1 ? <span aria-label="heart" role="img"><Button onClick={this.easterEgg} className="heart">❤️ {this.props.img.hearts}</Button></span> : <span aria-label="heart" role="img"><Button onClick={(e) => this.props.postHeart(this.props.img.id, e)} className="heart">❤️ {this.props.img.hearts}</Button></span>}
                <Delete className="delete" onClick={(event) => this.props.handleDelete(this.props.img.id)}/>
            </div>
        );
    }
}

export default GalleryItem;
