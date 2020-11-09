import React from 'react'
import {Link} from 'react-router-dom'
import Account from './Account'

class SlidePanel extends React.Component {

  getTotalAmount = () =>{
    let total = 0
    this.props.cart.forEach((item) => {
      total += item.sku.price
    });
    return parseFloat(total).toFixed(2)
  }

  renderCart = () =>{
    return this.props.cart.map(item =>
      <div className="cartcontainer">
        <img
          alt={item.name}
          src={item.frontimg}
        />
        <div>
          <h6>{item.sku.name.toUpperCase()}</h6>
          <h5> Quantity: {item.quantity}</h5>
          <button>Delete</button>
        </div>
      </div>
    )
  }


  renderCartOrAccount = () =>{
    if(this.props.clicking === "cart"){

      return(
        <div style={{marginTop:"80px"}}>
          <h2>Shopping Cart</h2>
          <div className="cart">{this.renderCart()}</div>
          {this.getTotalAmount() === parseFloat(0).toFixed(2) ? null :
          <Link to="/checkout">
            <button id="logoutbutton">Checkout<br/>Total: ${this.getTotalAmount()}</button>
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
