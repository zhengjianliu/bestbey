import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import Showpage from './containers/Showpage'
// import SlidePanel from './containers/SlidePanel';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';

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

  render() {
    // console.log("Here is the cart:",this.state.cart)
    return (
      <Router>
        <div className="App">
          <NavBar 
            cart={this.state.cart} 
            products={this.state.products} 
            searchHandler={this.searchHandler} 
            searchterm={this.state.searchterm}
            handleUserLogin={this.handleUserLogin}
            />
          <Route exact path="/" render={() =>
            <Home    
              products={this.filteredContent()} cartChangeHandler={this.cartChangeHandler}/>}/>
          <Route path="/showpage" render={() =><Showpage />}/>
        </div>
      </Router>
    );
  }
}

export default App;
