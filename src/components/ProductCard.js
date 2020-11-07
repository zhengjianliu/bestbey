import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductCard extends Component{
  render(){
    let {id, name, colors, rating, category, frontimg, sideimg, backimg, price, storage, ram, size, brand, additionalspecs } = this.props.product
    return(
      <div className="productcard">
        <div onClick={()=>this.props.clickHandler(this.props.product)}>
          <img src={frontimg} />
        </div>
        <h3>{name} | {brand}</h3>
        <h4>Star: {rating}</h4>

        <button className="cardbuttons" onClick={()=>this.props.clickHandler(this.props.product)}>More Information</button>
        <br/>
        <button className="cardbuttons addbutton">Add To Cart +</button>
      </div>
    )
  }
}

export default ProductCard
