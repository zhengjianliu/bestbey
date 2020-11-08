import React from 'react'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CardDeck  from 'react-bootstrap/CardDeck'
import DetailPage from './DetailPage'

class Home extends React.Component {
  state={
    show: [],
    clicked: false,
    clickCart:false
  }
  clickHandler = product =>{
    this.setState({clicked: !this.state.clicked, show: product})
  }

  renderProducts = () => {
    return this.props.products.map(product =><ProductCard key={product.id} product={product} clickHandler={this.clickHandler}/>)
  }

  render() {
    let options = this.state.show
    return (
      <section>

        <div id="homepage" className={this.state.clicked? "slidetoleft": null}>
          {this.renderProducts()}
        </div>

        <div id="secondpage" className={this.state.clicked?"slidetoright":null}>
          {this.state.show.length==0 ? null: <DetailPage cartChangeHandler={this.props.cartChangeHandler} product={this.state.show} clickHandler={this.clickHandler}/>}
        </div>

      </section>

      )
  }
}
export default Home
