import React from 'react'
import ProductCard from '../components/ProductCard'

export default class ProductCategory extends React.Component{

  renderProducts = () => {
    return this.props.products.map(product =><ProductCard key={product.id} product={product} clickHandler={this.props.clickHandler}/>)
  }

  render(){
    return(
      <div className="category">
      <h1>{this.props.products.length!== 0? this.props.products[0].category.toUpperCase() : null}</h1>
      <div>{this.renderProducts()}</div>
      </div>
    )
  }
}
