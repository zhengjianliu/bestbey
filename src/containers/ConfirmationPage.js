import React from 'react'
import {Redirect} from 'react-router-dom'

class ConfirmationPage extends React.Component {

  renderProductOrders = () => {
    return this.props.currentOrder.product_orders.map(
      product_order =>
      <tr>
        <td>{product_order.sku.name}</td>
        <td>{product_order.sku.id}</td>
        <td><b>${product_order.sku.price}</b></td>
        <td>{product_order.quantity}</td>

      </tr>
    )
  }

  getTotal = () =>{
    let total = 0
    this.props.currentOrder.product_orders.forEach((item) => {
      total += item.sku.price * item.quantity
    });
    return parseInt(total).toFixed(2)
  }

  render() {
 // if(this.props.currentOrder.product_orders === null || undefined){
 //   <Redirect to="/"/>
 // }else{
   return (
     <div className="showpage" style={{paddingTop:"120px"}}>
       { !this.props.currentOrder ? "loading..." :
       <>
         <h2>Your Confirmation Number is: {this.props.currentOrder.order.id}</h2>
         <table className="confirmationpage">
           <tr><td>Product</td><td>Product Id</td><td>Price</td><td>Quantity</td></tr>
           {this.renderProductOrders()}
         </table>
         <h1>Total: ${this.getTotal()}</h1>
         <p>Thanks for shopping with Bestbey</p>
       </>
       }
     </div>
   )
 }
  // }
}
export default ConfirmationPage
