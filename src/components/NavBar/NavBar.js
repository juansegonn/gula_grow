import react from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"; 
 
export default function NavBar() {
    return  (
            <header>
                <div className="logo-header">
                <Link to="/">
                    <img src="./img/logo-baner.png"/>
                </Link>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><NavLink to="/category/sativas" >Sativas </NavLink></li>
                        <li><NavLink to="/category/indicas" >Indicas </NavLink></li>
                        <li><NavLink to="/category/hibridas" >Hibridas </NavLink></li>
                        <CartWidget/> 
                    </ul>
                </nav>
            </header>
            )
}