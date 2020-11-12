import React from 'react'

class ReceiptItem extends React.Component{
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState( (prevState) => ({
            clicked: !prevState.clicked
        }))
    }

    getTotal = () =>{
      let total = 0
      this.props.receipt.skus.forEach((item) => {
        total += item.price * item.quantity
      });
      return parseInt(total).toFixed(2)
    }

render(){
    return(
        <li key={this.props.receipt.order_id} className="orderbox" onClick={this.handleClick}>
        <h5 className="receiptItem">
          Order: {this.props.receipt.order_id} - {this.props.receipt.order_date}
        </h5>
          { this.state.clicked ?
          this.props.receipt.skus.map(sku =>

            <>
                <p>Product: {sku.name}</p>
                <p><b>Q:{sku.quantity} x Price: {sku.price}</b></p>
            </>
            ) : null
            }
            <h5>Total: ${this.getTotal()}</h5>
            <br/>

      </li>
    )
}
}

export default ReceiptItem
