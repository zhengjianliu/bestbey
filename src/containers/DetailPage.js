import React from 'react'

export default class DetailPage extends React.Component{

  state={
    sku: this.props.product.skus[0],
    frontimg:this.props.product.frontimg,
    option: this.props.product.product_option_values[0].id,
    quantity: 1
  }
  renderOptions = () =>{
    return this.props.product.product_option_values.map(option=><option value={option.id}>{option.name}</option>)
  }

  renderGetPrice = () =>{
    let product = this.props.product.skus.find(sku => sku.product_option_value_id === parseInt(this.state.option))
    return product.price
  }

  changeHanlder= e =>{
    this.setState({option: parseInt(e.target.value)})
    this.setState({sku: this.props.product.skus.find(sku=> sku.product_option_value_id === this.state.option)})
  }

  render(){
    console.log(this.state.option)
    console.log(this.state.sku)
    return(
      <div>
        <div className="leftsidepenl">
          <img src={this.props.product.frontimg}/>
        </div>

        <div className="rightsidepanel">
        <h2>{this.props.product.name} | {this.props.product.brand}</h2>
        <h3>Options</h3>
        <form>
          <b>{this.props.product.product_options[0].name.toUpperCase()}:</b>
          <select onChange={this.changeHanlder}>
            {this.renderOptions()}
          </select>
        </form>

        <p>{this.props.product.additional_specs}</p>

        <h1>Price: ${this.renderGetPrice()}</h1>
        <hr/>
        <button onClick={()=>this.props.cartChangeHandler(this.state)}>Add to Cart</button>
        <br/>
        <button className="closebutton"onClick={()=>this.props.clickHandler([])}>{"<"}</button>
        </div>
      </div>
    )
  }
}
