import React from 'react'
import ProductCard from '../components/ProductCard'

export default class ProductCategory extends React.Component{

  renderProducts = () => {
    return this.props.products.map(product =><ProductCard key={product.id} product={product} clickHandler={this.props.clickHandler}/>)
  }

  render(){
    return(
      <div className="category">
      {this.props.products.length!== 0? <h1 id={this.props.products[0].category}>{this.props.products[0].category.toUpperCase()}</h1> : null}
      <div>{this.renderProducts()}</div>
      </div>
    )
  }
}
