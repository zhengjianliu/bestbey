import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import ConfirmationPage from './containers/ConfirmationPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CheckoutPage from './containers/CheckoutPage'
import Signup from './containers/Signup'


class App extends React.Component {

  state = {
    products: [],
    user:[],
    cart:[],
    currentOrder: null,
    searchterm:""
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({products: data}))
    .catch(e => console.error(e))
  }

  handleUserLogin = (userObj) => {
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

  signupHandler = newUserData =>{
    console.log(newUserData)
    let options ={
      method: "POST",
      headers: {
        "content-type":"application/json",
        "accept":"application/json"
      },
      body: JSON.stringify({
        username: newUserData.username,
        firstname: newUserData.firstname,
        lastname: newUserData.lastname,
        password: newUserData.password
      })
    }
    fetch("http://localhost:3000/users",options)
    .then(response => response.json())
  }

  filteredContent = () =>{
    if (this.state.searchterm === ""){
      return this.state.products
    }else{
      return this.state.products.filter(product=>product.name.toUpperCase().includes(this.state.searchterm.toUpperCase()) || product.brand.toUpperCase().includes(this.state.searchterm.toUpperCase()))
    }
  }

  cartChangeHandler = product =>{
    let newCart = this.state.cart
    if( this.state.cart.length === 0){
      this.setState({cart: [product]})
    }
    else {
      newCart.forEach( cartItem => {
        if (cartItem.sku.id === product.sku.id){
          cartItem.quantity+=1
          this.setState({
            cart: newCart
          })
        } else {
          this.setState({
            cart: [...newCart, product]
          })
        }
      })
    }
  }


  removeFromCartHandler = (skuId) => {
    console.log(skuId)
    let remainingCartItems = this.state.cart.filter( item => item.sku.id !== skuId)
    this.setState({
      cart: remainingCartItems
    })
  }

  searchHandler = e =>{
    e.preventDefault()
    this.setState({searchterm: e.target.value})
  }

  logoutHandler = () =>{
    this.setState({user:[]})
  }

  getOrderSkus = () => {
    return this.state.cart.map( cartItem => ({sku: cartItem.sku, quantity: cartItem.quantity}))
  }

  orderHandler = () =>{
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
    .then(data => this.setState({currentOrder: data, cart: []}))
  }

  render() {
    console.log(this.state.cart)
    return (
      <Router>
        <div className="App">
          <NavBar
            cart={this.state.cart}
            removeFromCartHandler={this.removeFromCartHandler}
            products={this.state.products}
            searchHandler={this.searchHandler}
            handleUserLogin={this.handleUserLogin}
            logoutHandler={this.logoutHandler}
            user = {this.state.user}
            />
          <Route exact path="/" render={() =>
            <Home products={this.filteredContent()} cartChangeHandler={this.cartChangeHandler}/>}/>
            <Route exact path='/signup' render={()=><Signup signupHandler={this.signupHandler}/>}/>
            <Route path="/checkout" render={() =>
              <CheckoutPage
                appState={this.state}
                orderHandler={this.orderHandler}
                removeFromCartHandler={this.removeFromCartHandler}
                />}
              />
            <Route path="/confirmation" render={() =>
              <ConfirmationPage
                currentOrder={this.state.currentOrder}
              />}
            />
        </div>
      </Router>
    );
  }
}

export default App;
