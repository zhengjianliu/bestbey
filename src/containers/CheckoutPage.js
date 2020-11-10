import React from 'react'
import CartItem from '../components/CartItem'
import {Link} from 'react-router-dom'


class CheckoutPage extends React.Component {

  renderCartItem = () =>{
    return this.props.appState.cart.map(item=>
      <CartItem 
        item={item}
        key={item.sku.id}
        removeFromCartHandler={this.props.removeFromCartHandler}
        checkout
      />
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
              <Link to="/confirmation">
                <button 
                  className="addbutton cardbuttons"
                  onClick={()=>this.props.orderHandler(this.props.appState.cart)}
                  >Place Order</button>
              </Link>
            </div>
        )
    }
}
export default CheckoutPage
