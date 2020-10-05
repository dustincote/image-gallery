import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import About from '../About/About.js';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home.js'




class App extends Component {
  state = {
    images: [],
    newImage: {
      path: '',
      description: '',
    }
  }
  //run get request on page load to get all images
  componentDidMount() {
    this.getImages();
  }//end componentDidMount

  //get images from database
  getImages = () => {
    Axios.get('/gallery').then(response => {
      this.setState({
        images: response.data

      })

    }).catch(err => console.log('Error in Axios GET to /gallery', err));
  }//end getImages


  //when like button clicked send it to the database to store it and then refresh the images
  postLike = (picId, event) => {
    event.stopPropagation()
    Axios.put(`/gallery/like/${picId}`).then(response => {
      this.getImages()

    }).catch(err => console.log('Error in PUT to /gallery/:id', err));
  }//end postLike


  //when heart button is clicked send it to the database and store it then refresh the images
  postHeart = (picId, event) => {
    event.stopPropagation()
    Axios.put(`/gallery/heart/${picId}`).then(response => {
      this.getImages()

    }).catch(err => console.log('Error in PUT to /gallery/:id', err));
  }//end postHeart

  //send a post request to the database to store a new image and then refresh the images
  addPic = (event) => {
    event.stopPropagation()
    Axios.post('/gallery', this.state.newImage).then(response => {
      this.setState({
        ...this.state,
        newImage: {
          path: '',
          description: '',
        }
      });
      this.getImages()
    }
    ).catch(err => console.log('ERROR in POST', err))
  }//end addPic



  //capture what is typed into the form and ste the state of newImage
  handleChange = (event) => {
    console.log(this.state.newImage)
    this.setState({
      ...this.state,
      newImage: {
        ...this.state.newImage,
        [event.target.name]: event.target.value
      }
    })
  }//end handleChange



  //DELETE request to the data base to delete an item in which the delete button was clicked, then refresh the images
  handleDelete = (id, event) => {
    Axios.delete(`/gallery/${id}`).then(response => {
      this.getImages()
      event.stopPropagation()
    }).catch(err => console.log('ERROR in DELETE to /gallery/:id'));
  }/*end handleDelete*/








  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <span className="App-title">InstaFacegrambook</span><br></br>
            <img className="logo" src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="logo" /><br></br>
            <span>"Might as well waste your time with us instead"</span><br></br>
            <span>make sure to <span aria-label="like" role="img">👍</span> and <span aria-label="heart" role="img">❤️</span> our pictures</span>
          </header>
          <span>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </span>
          <br />
          <Switch>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/">
              <Home newImage={this.state.newImage} 
              handleChange={this.handleChange} 
              addPic={this.addPic} images={this.state.images} 
              postLike={this.postLike} 
              postHeart={this.postHeart} 
              handleDelete={this.handleDelete}/>
            </Route>

          </Switch>
        </div>


 

      </Router >
      
);
  }
}

export default App;
