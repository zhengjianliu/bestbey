import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import Showpage from './containers/Showpage'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {

  state = {
    products: [],
    user:[],
    cart:[],
    searchterm:""
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({products: data}))
    .catch(e => console.error(e))
  }

  filteredContent = () =>{
    if (this.state.searchterm === ""){
      return this.state.products
    }else{
      return this.state.products.filter(product=>product.name.toUpperCase().includes(this.state.searchterm.toUpperCase()) || product.brand.toUpperCase().includes(this.state.searchterm.toUpperCase()))
    }
  }

  cartChangeHandler = product =>{
    this.setState({cart:[...this.state.cart, product]})
  }

  searchHandler = e =>{
    this.setState({searchterm: e.target.value})
  }

  // filteredCart = () =>{
  //   let newCart = []
  //   if(this.state.cart.length >= 2){
  //       let i = 0
  //       let currentItem = this.state.cart[i].sku.name
  //       let nextItem = this.state.cart[i+1].sku.name
  //       console.log(currentItem)
  //       console.log(nextItem)
  //
  //       if( currentItem=== nextItem){
  //         newCart = this.state.cart.splice(1,1)
  //         console.log(newCart)
  //       }
  //
  //   }
  // }
  render() {
    console.log("Here is the cart:", this.state.cart)
    return (
      <Router>
        <div className="App">
          <NavBar cart={this.state.cart} products={this.state.products} searchHandler={this.searchHandler} searchterm={this.state.searchterm}/>
          <Route exact path="/" render={() =><Home products={this.filteredContent()} cartChangeHandler={this.cartChangeHandler}/>}/>
          <Route path="/showpage" render={() =><Showpage />}/>
        </div>
      </Router>
    );
  }
}

export default App;
