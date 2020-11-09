import React from 'react'

class CheckoutPage extends React.Component {
  state={
    cart: this.props.appState.cart,
    products: this.props.appState.products,
    user: this.props.appState.user
  }

  renderCartItem = () =>{
    return this.state.cart.map(item=>
      <tr>
        <td><img src={item.frontimg}/></td>
        <td><h5>{item.sku.name.toUpperCase()}</h5></td>
        <td><h4>Quantity: {item.quantity}</h4></td>
      </tr>
    )
  }
    render(){

        return(
            <div style={{paddingTop:"80px"}} >
                <h1>Checkout Page</h1>
              <hr className="hrline"/>

              <table id="checkoutcontainer">
                {this.renderCartItem()}
              </table>
              <button className="addbutton cardbuttons"onClick={()=>this.props.orderHandler(this.state.cart)}>Place Order</button>

            </div>
        )
    }
}
export default CheckoutPage
