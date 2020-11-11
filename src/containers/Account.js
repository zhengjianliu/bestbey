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
            <div className="accountcontainer">
              <h2>Welcome Back</h2>
              {/* <br/> */}
              <h3>{firstname} {lastname}</h3>
              <h4 className="orderHistory">Order History</h4>
              <ul className="orderHistoryList" >
                {this.renderReceipts()}
              </ul>
              <button id="logoutbutton" onClick={this.props.logoutClickHandler}>Logout</button>
            </div>
        )
    }
}
export default Account
