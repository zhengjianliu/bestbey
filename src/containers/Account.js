import React from 'react'
import ReceiptItem from '../components/ReceiptItem'

class Account extends React.Component {

    renderReceipts = () => {
      return this.props.user.receipts.map(rec =>
        <ReceiptItem receipt={rec}/>
      )
    }

    render(){
      let {firstname, lastname} = this.props.user
        return(
            <div className="cart">
              <h3>Welcome Back</h3>
              <h6>{firstname.toUpperCase()} {lastname.toUpperCase()}</h6>
              <hr/>
              <h4 className="orderHistory">Order History</h4>
              <br/>
              <ul className="orderHistoryList" >
                {this.renderReceipts()}
              </ul>
              <button id="logoutbutton" onClick={this.props.logoutClickHandler}>Logout</button>
            </div>
        )
    }
}
export default Account
