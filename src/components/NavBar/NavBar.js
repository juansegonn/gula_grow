import React, { useContext } from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"; 
import { CartContext } from "../../context/CartContext";

 
 function NavBar() {

    const { cart } = useContext(CartContext)

    return  (
            <header>
                <div className="logo-header">
                <Link to="/">
                    <img src="/img/logo-baner.png"/>
                </Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><NavLink to="/category/sativas" >Sativas </NavLink></li>
                        <li><NavLink to="/category/indicas" >Indicas </NavLink></li>
                        <li><NavLink to="/category/hibridas" >Hibridas </NavLink></li>
                        { cart.length === 0 ? <p></p> : <CartWidget/> } 
                    </ul>
                </nav>
            </header>
            )
}

export default NavBar