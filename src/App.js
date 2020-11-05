import React from 'react'
import './App.css';
import Home from './containers/Home'
import Navbar from './containers/Navbar';
import SlidePanel from './containers/SlidePanel';

class App extends React.Component {

  state = {
    products: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({ products: data }))
    .catch(e => console.error(e))
  }

  render(){

    return (
      <div className="App">
        <h1>App.js</h1>
        <Navbar />
        <Home products={this.state.products} />
        <SlidePanel />

      </div>
    );
  }
}

export default App;
