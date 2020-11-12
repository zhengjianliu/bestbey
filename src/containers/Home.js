import React from 'react'
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
    let newArray = []
    this.state.categories.map(category =>
      this.props.products.find( product => product.category === category? (!newArray.includes(category)?newArray.push(category):null):null)
    )
    return newArray
  }

  categoryIcon = ()=>{
    return this.renderCategoryIcon().map(category =>
      <a key={category} href={`#${category}`}>
        <img 
          className="iconImg" 
          alt=""
          src={this.props.products.find( product => product.category === category).frontimg}></img>
        <p>{category.toUpperCase()}</p>
      </a>
    )
  }

  render() {
    return (
      <section>

        <div id="homepage" className={this.state.clicked? "slidetoleft": null}>

          <div className="displaycategory">{this.categoryIcon()}</div>

          {this.props.products.length===0 ? <h1>loading...</h1> : this.renderCategory()}
        </div>

        <div id="secondpage" className={this.state.clicked?"slidetoright":null}>
          {this.state.show.length === 0 ? null: <DetailPage user={this.props.user} cartChangeHandler={this.props.cartChangeHandler} product={this.state.show} clickHandler={this.clickHandler}/>}
        </div>

      </section>

      )
  }
}
export default Home
