import React from 'react'

class SlidePanel extends React.Component {

  getTotalAmount = () =>{
    let total = 0
    this.props.cart.forEach((item) => {
      total += item.sku.price
    });
    return total
  }


  renderCart = () =>{
    return this.props.cart.map((item,index) =>
      <div className="cartcontainer" cartitem-id={index}>
        <img src={item.frontimg} alt={item.sku.name}/>
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
          {this.getTotalAmount() === 0? null:<button id="logoutbutton">Checkout<br/>Total: ${this.getTotalAmount()}</button>}
        </div>
      )

    }else if(this.props.clicking === "account"){

      return(
        <div style={{marginTop:"80px"}}>
          <h1>Account</h1>
          <button id="logoutbutton">Logout</button>
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
