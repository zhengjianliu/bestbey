import React from 'react'

const CartItem = (props) => {

    const handleDeleteFromCart = () => {
        props.removeFromCartHandler(props.item.sku.id)
      }

    return(
        props.checkout ?  
            <tr>
                <td><img src={props.item.frontimg}/></td>
                <td><h5>{props.item.sku.name.toUpperCase()}</h5></td>
                <td><h4>Quantity: {props.item.quantity}</h4></td>
                <td><button onClick={handleDeleteFromCart} >Delete</button></td>
            </tr>
        :
        <div className="cartcontainer">
            <img
                alt={props.item.name}
                src={props.item.frontimg}
            />
        <div>
          <h6>{props.item.sku.name.toUpperCase()}</h6>
          <h5> Quantity: {props.item.quantity}</h5>
          <button
            onClick={handleDeleteFromCart}
          >Delete</button>
        </div>
      </div>
    )
}
export default CartItem