import React from 'react'
import ProductCard from '../components/ProductCard'
import DetailPage from './DetailPage'
import ProductCategory from './ProductCategory'

class Home extends React.Component {
  state={
    show: [],
    clicked: false,
    clickCart:false,
    categories: [],
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
      return <ProductCategory key={category}
        products={categoryProducts} clickHandler={this.clickHandler}/>
    })
  }

  renderCategoryIcon = () =>{
    return this.state.categories.map(category =>
      <a href={`#${category}`}>
        <img className="iconImg" src={this.props.products.find( product => product.category === category).frontimg}></img>
        <p>{category.toUpperCase()}</p>
      </a>
    )
  }

  render() {
    return (
      <section>

        <div id="homepage" className={this.state.clicked? "slidetoleft": null}>

          <div className="displaycategory">{this.renderCategoryIcon()}</div>

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
