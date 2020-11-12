import React from 'react'
import {Link} from 'react-router-dom'
import Account from './Account'
import CartItem from '../components/CartItem'

class SlidePanel extends React.Component {

  getTotalAmount = () =>{
    let total = 0
    this.props.cart.forEach((item) => {
      total += item.sku.price * item.quantity
    });
    return parseFloat(total).toFixed(2)
  }

  renderCart = () =>{
    return this.props.cart.map(item =>
      <CartItem
        key={item.sku.id}
        item={item}
        removeFromCartHandler={this.props.removeFromCartHandler}
      />
    )
  }


  renderCartOrAccount = () =>{
    if(this.props.clicking === "cart"){
      return(
        <div style={{marginTop:"80px"}}>
          <h3>Shopping Cart</h3>
          <hr/>
          <div className="cart">{this.renderCart()}</div>
          {this.getTotalAmount() === parseFloat(0).toFixed(2) ? null :
          <Link to="/checkout">
            <button id="logoutbutton" onClick={this.props.checkoutClickHandler}>Checkout<br/>Total: ${this.getTotalAmount()}</button>
          </Link>}
        </div>
      )

    }else if(this.props.clicking === "account"){
      return(
        <div style={{marginTop:"80px"}}>
          <Account user={this.props.user} clickCart={this.props.clickCart} logoutClickHandler={this.props.logoutClickHandler}/>
        </div>
      )

    }
  }

    render(){
        return(
            <div id="slidepanel" className={this.props.clickCart? "active":null}>
              {this.renderCartOrAccount()}
            </div>
        )
    }
}
export default SlidePanel
