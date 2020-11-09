import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductCard extends Component{
  render(){
    return(
      <div className="productcard" onClick={()=>this.props.clickHandler(this.props.product)}>
        <div>
          <img src={this.props.product.frontimg} />
        </div>
        <h3>{this.props.product.name} | {this.props.product.brand}</h3>
        <h4>Star: {this.props.product.rating}</h4>
      </div>
    )
  }
}

export default ProductCard
