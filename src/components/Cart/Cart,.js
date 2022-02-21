import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, vaciarCarrito, deleteItem } = useContext(CartContext)


    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Carrito Vacio</h2>
                    <Link to="/">{'<<'}volver al inicio </Link>
                </>
            ) : (
                <>    
                    {cart.map((producto)=> (
                        <div key={producto.id}> 
                            <h3>{producto.nombre}</h3>
                            <h3>{producto.cantidad}</h3>
                            <button onClick={() => deleteItem(producto.id)}>X</button>
                        </div>
                ))}
                <button onClick={ vaciarCarrito }> Vaciar carrito</button>
            </> 
            )}
        </>
    )
}

export default Cart;
