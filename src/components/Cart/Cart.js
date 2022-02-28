import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './Cart.css';
import ItemCount from '../ItemCount/ItemCount';

const Cart = () => {
    const { cart, vaciarCarrito, deleteItem, sumarPrecios } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Carrito Vacio</h2>
                    <Link to="/">{'<<'}volver al inicio </Link>
                </>
            ) : (
                <div className="cart__container">    
                    {cart.map((producto)=> (
                        <div className="cart__productos" key={producto.id}> 
                            <div> 
                                <img className="img__productos" src= { producto.img } alt= "imagen del producto"/>
                            </div>
                            <div> 
                                <h3>{producto.nombre}</h3>
                                <h3>{producto.cantidad}</h3>
                                <h3>${ producto.precio * producto.cantidad }</h3>
                            </div>
                            <button onClick={() => deleteItem(producto.id)}>X</button>
                        </div>
                ))}
                <div>
                    {cart.map((producto)=> (
                        <div>
                            <h3>{  }</h3>
                        </div>
                    )
                    )}
                </div>
                <button onClick={ vaciarCarrito }> Vaciar carrito</button>
            </div> 
            )}
        </>
    )
}

export default Cart;
