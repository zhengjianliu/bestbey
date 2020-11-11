import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class DetailPage extends React.Component{
  state={
    sku: this.props.product.skus[0],
    frontimg:this.props.product.frontimg,
    quantity: 1
  }
  renderOptions = () =>{
    return this.props.product.product_option_values.map(option=><option key={option.id} value={option.id}>{option.name}</option>)
  }
  setSku = (e) => {
    let foundSku = this.props.product.skus.find( sku => sku.product_option_value_id === parseInt(e.target.value) )
    this.setState({sku: foundSku})
  }

  changeQuantity = (e) => {
    this.setState({quantity: parseInt(e.target.value)})
  }

  render(){
    return(
      <div>

        <div className="leftsidepenl">
          <Carousel>

            <Carousel.Item>
              <img
                className="carouselimage"
                src={this.props.product.frontimg}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carouselimage"
                src={this.props.product.sideimg}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carouselimage"
                src={this.props.product.backimg}
                alt="Third slide"
              />
            </Carousel.Item>

          </Carousel>

        </div>

        <div className="rightsidepanel">
        <h2>{this.props.product.name.toUpperCase()} | {this.props.product.brand.toUpperCase()}</h2>
        <hr className="hrline"/>
        <h3>Options</h3>
        <form>
          <b>{this.props.product.product_options[0].name.toUpperCase()}:</b>
          <select onChange={this.setSku}>
            {this.renderOptions()}
          </select>
        </form>
        <p style={{textAlign:"left",padding:"20px", paddingRight:"30px"}}>{this.props.product.additional_specs}</p>
        <h3>Price: ${this.state.sku.price}</h3>
        {this.props.user.length !==0 ?
        <div>
        <p>Quantity:</p>
        <input title="quantity" type="number" value={this.state.quantity} onChange={this.changeQuantity} min="1" max="10" className="quantity"></input><br/>
        <button className="cardbuttons addbutton" onClick={()=>this.props.cartChangeHandler(this.state)}>Add to Cart</button>
        </div>
        : null}
        <br/>
        <button className="closebutton"onClick={()=>this.props.clickHandler([])}>{"<"}</button>
        </div>
      </div>
    )
  }
}
