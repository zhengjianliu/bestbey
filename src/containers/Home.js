import React from 'react'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CardDeck  from 'react-bootstrap/CardDeck'

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
    let {id, name, colors, rating, category, frontimg, sideimg, backimg, price, storage, ram, size, brand, additional_specs } = this.state.show
    let options = this.state.show
    console.log(options)
    return (
      <section>

        <div id="homepage" className={this.state.clicked? "slidetoleft": null}>
          {this.renderProducts()}
        </div>

        <div id="secondpage" className={this.state.clicked?"slidetoright":null}>

          <h2>{name} | {brand}</h2>
          <img src={frontimg}/>
          <p>{additional_specs}</p>
          <button className="closebutton"onClick={this.clickHandler}>{"<"}</button>
        </div>

      </section>

      )
  }
}
export default Home
