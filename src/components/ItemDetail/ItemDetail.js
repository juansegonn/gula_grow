import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
    const [itemCount, setItemCount] = useState(false)
    const { cart, addToCart } = useContext(CartContext)

    const onAdd= (cantidad) => {
        setItemCount(true);
        addToCart(cantidad, producto);
    }

    return (
        <div className="details">
            <div className="big-img">
                <img src= { producto.img } alt= "imagen del producto"/>    
            </div>
            <div className="box">
                <div className="row">
                    <h2>{ producto.nombre }</h2>
                    <span>${ producto.precio }</span>
                </div>
                <div className="box__top">
                    <p>Cantidad de THC: { producto.porcTHC }</p>
                </div>
                <div className="box__bot">
                    <p>Tiempo de flowering: { producto.flowering }</p>
                </div>
                <div className="box__bot">
                    <p>Indica: { producto.porcIND }</p>
                </div>
                <div className="box__bot">
                    <p>Sativa: { producto.porcSAT }</p>
                </div>
            {
               ! itemCount ? 
                <ItemCount stock={ producto.stock } initial={ 0 } onAdd={ onAdd }></ItemCount>:
               <div className="btn__carrito__container">
                   <div className="btn__bot"><Link className="btn__carrito" to="/">SEGUIR COMPRANDO</Link></div>
                   <div className="btn__top"><Link className="btn__carrito" to="/cart">IR AL CARRITO</Link></div>
               </div>
            }
            </div>
        </div>
    )
}
export default ItemDetail;