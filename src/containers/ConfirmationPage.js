import React from 'react'

class ConfirmationPage extends React.Component {

  renderProductOrders = () => {
    return this.props.currentOrder.product_orders.map(
      product_order => 
      <tr>
        <td>{product_order.sku.name}</td>
        <td>{product_order.sku.id}</td>
        <td>{product_order.quantity}</td>
      </tr>
    )
  }

  render() {

    return (
      <div className="showpage"><br></br><br></br>
        { !this.props.currentOrder ? "loading..." : 
        <>
          <h2>Your Confirmation Number is: {this.props.currentOrder.order.id}</h2>
          <table>
            <tr><td>Product</td><td>Product Id</td><td>Quantity</td></tr>
            {this.renderProductOrders()}
          </table> 
          <p>Thanks for shopping with Bestbey</p>
        </>
        }
      </div>
    )
  }
}
export default ConfirmationPage
