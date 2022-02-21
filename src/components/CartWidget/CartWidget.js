import react from "react";
import "./CartWidget.css"; 
import { Link } from "react-router-dom"; 


export default function CartWidget() {
    return (
        <Link to="/Cart" id="carrito__boton" className="carrito__boton">
            <i className="fas fa-shopping-cart"></i>
        </Link>
)}