import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import CheckOut from "../CheckOut/CheckOut";
import ItemCount from '../ItemCount/ItemCount';

const Cart = () => {
    const { cart, vaciarCarrito, deleteItem, total } = useContext(CartContext)

    return (
        <>
                <div className="cart__container">    
                    {cart.map((producto)=> (
                        <div className="cart__productos" key={producto.id}> 
                            <div> 
                                <img className="img__productos" src= { producto.img } alt= "imagen del producto"/>
                            </div>
                            <div className="cart__data"> 
                                <h3 className="cart__name">{producto.nombre}</h3>
                                <h3 className="cart__quantity">x {producto.cantidad} blister</h3>
                                <h3 className="cart__price">${ producto.precio * producto.cantidad }</h3>
                                <button className="cart__x" onClick={() => deleteItem(producto.id)}>X</button>
                            </div>
                        </div>
                ))}
            <div className="cart__checkout"><CheckOut></CheckOut></div>
            </div> 
        </>
    )
}

export default Cart;
