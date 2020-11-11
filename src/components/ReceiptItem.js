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

render(){
    return(
        <li key={this.props.receipt.order_id} >
        <h5
            className="receiptItem"
            onClick={this.handleClick}
        >Order: {this.props.receipt.order_id} - {this.props.receipt.order_date}</h5>
          { this.state.clicked ?
          this.props.receipt.skus.map(sku => 
            <>
                <p>Product: {sku.name}</p>
                <p>{sku.quantity} - Price: {sku.price}</p>
            </>
            ) : null
            }
      </li>
    )
}
}

export default ReceiptItem