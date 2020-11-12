import React, {Component} from 'react'

class ProductCard extends Component{
  render(){
    return(
      <div className="productcard" onClick={()=>this.props.clickHandler(this.props.product)}>
        <div>
          <img
            alt={this.props.product.name}
            src={this.props.product.frontimg}
          />
        </div>
        <h4>{this.props.product.name.toUpperCase()} | {this.props.product.brand}</h4>
        <h5>Rating: {this.props.product.rating} / 5.0</h5>
      </div>
    )
  }
}

export default ProductCard
