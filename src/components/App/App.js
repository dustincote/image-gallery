import React, { Component } from 'react';
import GalleryList from './GalleryList/GalleryList.js';
import './App.css';
import Axios from 'axios';



class App extends Component {
  state= {
    images: []
  }

  componentDidMount(){
    this.getImages();
  }

  getImages = () => {
    Axios.get('/gallery').then(response =>{
      this.setState({
        images: response.data
        
      })
      console.log(response.data)
    }).catch(err => console.log('Error in Axios GET to /gallery', err));
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList images={this.state.images} />
      </div>
    );
  }
}

export default App;
