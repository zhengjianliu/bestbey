import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import Showpage from './containers/Showpage'
import SlidePanel from './containers/SlidePanel';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

class App extends React.Component {

  state = {
    products: [],
    user:[],
    cart:[]
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({products: data}))
    .catch(e => console.error(e))
  }

  cartChangeHandler = product =>{
    this.setState({cart:[...this.state.cart, product]})
  }

  render() {
    // console.log("Here is the cart:",this.state.cart)
    return (
      <Router>
        <div className="App">
          <NavBar cart={this.state.cart} products={this.state.products}/>
          <Route exact path="/" render={() =><Home products={this.state.products} cartChangeHandler={this.cartChangeHandler}/>}/>
          <Route path="/showpage" render={() =><Showpage />}/>
        </div>
      </Router>
    );
  }
}

export default App;
