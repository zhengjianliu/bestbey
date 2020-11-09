import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductCard extends Component{
  render(){
    return(
      <div className="productcard">
        <div onClick={()=>this.props.clickHandler(this.props.product)}>
          <img 
            alt={this.props.product.name}
            src={this.props.product.frontimg} 
          />
        </div>
        <h3>{this.props.product.name} | {this.props.product.brand}</h3>
        <h4>Star: {this.props.product.rating}</h4>

        <button className="cardbuttons" onClick={()=>this.props.clickHandler(this.props.product)}>More Information</button>
        <br/>
        <button className="cardbuttons addbutton">Add To Cart +</button>
      </div>
    )
  }
}

export default ProductCard
