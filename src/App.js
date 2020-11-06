import React from 'react'
import './App.css';
import Home from './containers/Home'
import NavBar from './containers/NavBar';
import Showpage from './containers/Showpage'
import SlidePanel from './containers/SlidePanel';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {

  state = {
    products: [],
    clicked: false,
    clickCart:false
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({products: data}))
    .catch(e => console.error(e))
  }

  clickHandler = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" render={() =><Home products={this.state.products} clicked={this.state.clicked} clickHandler={this.clickHandler}/>}/>
          <Route path="/showpage" render={() =><Showpage />}/>
        </div>
      </Router>
    );
  }
}

export default App;
