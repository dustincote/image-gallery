import React, { Component } from 'react';
import GalleryList from './GalleryList/GalleryList.js';
import './App.css';
import Axios from 'axios';
import ImageForm from '../ImageForm/ImageForm.js';



class App extends Component {
  state= {
    images: [],
    newImage: {
      path: '',
      description: '',
    }
  }

  componentDidMount(){
    this.getImages();
  }

  getImages = () => {
    Axios.get('/gallery').then(response =>{
      this.setState({
        images: response.data
        
      })

    }).catch(err => console.log('Error in Axios GET to /gallery', err));
  }

  postLike = (picId,event) => {
    event.stopPropagation()
    Axios.put(`/gallery/like/${picId}`).then(response => {
      this.getImages()
      
    }).catch(err => console.log('Error in PUT to /gallery/:id', err));
  }

  postHeart = (picId, event) => {
    event.stopPropagation()
    Axios.put(`/gallery/heart/${picId}`).then(response => {
      this.getImages()

    }).catch(err => console.log('Error in PUT to /gallery/:id', err));
  }


  addPic = (event) => {
    event.stopPropagation()
    Axios.post('/gallery', this.state.newImage ).then(response => {
      this.setState({
      ...this.state,
      newImage:{
        path: '',
        description: '',
      }
    });
    this.getImages()
  }
  ).catch(err=> console.log('ERROR in POST',err))
  }

  handleChange = (event) =>{
    console.log(this.state.newImage)
      this.setState({
        ...this.state,
        newImage:{...this.state.newImage,
        [event.target.name]: event.target.value
        }
      })
  }

  handleDelete = (id,event) => {
    Axios.delete(`/gallery/${id}`).then(response => {
      this.getImages()
      event.stopPropagation()
    }).catch(err => console.log('ERROR in DELETE to /gallery/:id'));
  }



 




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">InstaFacegrambook</span><br></br>
          <img className="logo" src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="logo" /><br></br>
          <span>"Might as well waste your time with us instead"</span><br></br>
          <span>make sure to <span aria-label="like" role="img">👍</span> and <span aria-label="heart" role="img">❤️</span> our pictures</span>
        </header>
        <br/>
        <ImageForm newImage={this.state.newImage} handleChange={this.handleChange} addPic={this.addPic}/>
        <GalleryList images={this.state.images} postLike={this.postLike} postHeart={this.postHeart} handleDelete={this.handleDelete}/>

      </div>
    );
  }
}

export default App;
