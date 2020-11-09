import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import ConfirmationPage from './containers/ConfirmationPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CheckoutPage from './containers/CheckoutPage'


class App extends React.Component {

  state = {
    products: [],
    user:[],
    cart:[],
    currentOrder: [],
    searchterm:""
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({products: data}))
    .catch(e => console.error(e))
  }

  handleUserLogin = (userObj) => {
    // console.log(userObj)
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(users => this.findUser(users, userObj))
  }

  findUser = (users, userObj) =>{
    let newUser =  users.find(user =>
      user.username === userObj.username &&
      user.password === userObj.password
      )
    if (newUser) {this.setState({user: newUser})}
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

  logoutHandler = () =>{
    this.setState({user:[]})
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

  getOrderSkus = () => {
    return this.state.cart.map( cartItem => ({sku: cartItem.sku, quantity: cartItem.quantity}))
  }

  orderHandler = (cart) =>{
    // console.log(cart, this.state.user.id)
    let options = {
      method: "POST",
      headers: {
        "content-type":"application/json",
        "accept":"application/json"
      },
      body: JSON.stringify({
        skus: this.getOrderSkus(),
        user_id: this.state.user.id
      })
    }
    fetch("http://localhost:3000/orders", options)
    .then(response => response.json())
    .then(data => this.setState({currentOrder: data}))
  }

  render() {
    console.log(this.getOrderSkus())
    return (
      <Router>
        <div className="App">
          <NavBar
            cart={this.state.cart}
            products={this.state.products}
            searchHandler={this.searchHandler}
            searchterm={this.state.searchterm}
            handleUserLogin={this.handleUserLogin}
            logoutHandler={this.logoutHandler}
            user = {this.state.user}
            />
          <Route exact path="/" render={() =>
            <Home products={this.filteredContent()} cartChangeHandler={this.cartChangeHandler}/>}/>
            <Route path="/checkout" render={() =><CheckoutPage appState={this.state} orderHandler={this.orderHandler}/>}/>
            <Route path="confirmation" render={() =><ConfirmationPage />}/>
        </div>
      </Router>
    );
  }
}

export default App;
