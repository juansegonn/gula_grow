import React, { useContext } from 'react';
import "./CartWidget.css"; 
import { Link } from "react-router-dom"; 
import { CartContext } from '../../context/CartContext'

 function CartWidget() {

    const { unidades } = useContext(CartContext)


    return (
        <Link to="/Cart" id="carrito__boton" className="carrito__boton">
            <i className="fas fa-shopping-cart"></i>
            <span className="unidades">{ unidades() }</span>
        </Link>
)}

export default CartWidget

