import react from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return  (
            <header>
                <div className="logo-header">
                    <a title="Home" href="index.html"><img src="./img/logo-baner.png"/></a>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a className="enlace" href="semillas.html">semillas</a></li>
                        <li><a className="enlace" href="galeria.html">galeria</a></li>
                        <li><a className="enlace" href="contacto.html">contacto</a></li>
                        <CartWidget/> 
                    </ul>
                </nav>
            </header>
            )
}