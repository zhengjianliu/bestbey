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
    return this.props.cart.map(item =>
      <div className="cartcontainer">
        <img src={item.frontimg}/>
        <div>
          <h6>{item.sku.name.toUpperCase()}</h6>
          <h5> Quantity: {item.quantity}</h5>
        </div>
      </div>
    )
  }


  renderCartOrAccount = () =>{
    if(this.props.clicking === "cart"){

      return(
        <div style={{marginTop:"60px"}}>
          <h2>Shopping Cart</h2>
          {this.renderCart()}
          {this.getTotalAmount() == 0? null:<button id="logoutbutton">Checkout<br/>Total: ${this.getTotalAmount()}</button>}
        </div>
      )

    }else if(this.props.clicking === "account"){

      return(
        <div style={{marginTop:"60px"}}>
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
