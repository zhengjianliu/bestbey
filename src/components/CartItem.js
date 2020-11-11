import React from 'react'

const CartItem = (props) => {

    const handleDeleteFromCart = () => {
        props.removeFromCartHandler(props.item.sku.id)
      }

    const changeQuantity = (e) => {
      props.changeQuantityHandler(props.item.sku.id, e.target.value)
    }

    return(
        props.checkout ?  
            <tr>
                <td><img src={props.item.frontimg}/></td>
                <td><h5>{props.item.sku.name.toUpperCase()}</h5></td>
                <td><label>Quantity</label>
                <input 
                  type="number" 
                  value={props.item.quantity} 
                  onChange={changeQuantity}
                ></input></td>
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
          <label>Quantity</label>
          <input 
            type="number" 
            value={props.item.quantity} 
            onChange={changeQuantity}
          ></input>
          <button
            onClick={handleDeleteFromCart}
          >Delete</button>
        </div>
      </div>
    )
}
export default CartItem