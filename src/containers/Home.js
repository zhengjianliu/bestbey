import React from 'react'
import ProductCard from '../components/ProductCard'
import DetailPage from './DetailPage'
import ProductCategory from './ProductCategory'

class Home extends React.Component {
  state={
    show: [],
    clicked: false,
    clickCart:false,
    categories: []
  }

  clickHandler = product =>{
    this.setState({clicked: !this.state.clicked, show: product})
  }

  filterCategory = () =>{
    return this.props.products.forEach(product =>{
      if(!this.state.categories.includes(product.category)){
        this.setState({categories:[...this.state.categories, product.category]})
      }
    })
  }

  renderCategory = () =>{
    {this.filterCategory()}
    return this.state.categories.map(category=>{
      let categoryProducts = this.props.products.filter( product => product.category === category)
      return <ProductCategory products={categoryProducts} clickHandler={this.clickHandler}/>
    })
  }

  render() {
    console.log(this.state.categories)
    return (
      <section>

        <div id="homepage" className={this.state.clicked? "slidetoleft": null}>
          {this.props.products.length===0 ? <h1>loading...</h1> : this.renderCategory()}
        </div>

        <div id="secondpage" className={this.state.clicked?"slidetoright":null}>
          {this.state.show.length === 0 ? null: <DetailPage cartChangeHandler={this.props.cartChangeHandler} product={this.state.show} clickHandler={this.clickHandler}/>}
        </div>

      </section>

      )
  }
}
export default Home
