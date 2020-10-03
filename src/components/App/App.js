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
      this.getMarkets()
    }).catch(err => console.log('Error in Axios GET to /gallery', err));
  }

  postLike = (picId,event) => {
    event.stopPropagation()
    Axios.put(`/gallery/like/${picId}`).then(response => {
      this.getImages()
      
    }).catch(err => console.log('Error in PUT to /gallery/:id', err));
  }

  getMarkets = () =>{
    Axios({
      "method": "GET",
      "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "b4ee545aa5msh1038a3149365549p1d87bfjsn6d53ab30933b",
        "useQueryString": true
      }, "params": {
        "region": "US"
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
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
        <GalleryList images={this.state.images} postLike={this.postLike} />

      </div>
    );
  }
}

export default App;
