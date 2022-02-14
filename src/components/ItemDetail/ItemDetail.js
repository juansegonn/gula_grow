import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useState } from 'react';

function ItemDetail ({ producto}) {
    const [itemCount, setItemCount] = useState()

    function agregarItems(value){
        setItemCount (value)
        console.log(value)
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
                <ItemCount stock={ producto.stock } initial={ 1 } onAdd={ agregarItems }></ItemCount>:
                <Link to="/cart">ir al carrito</Link>
            }
            </div>
        </div>
    )
}
export default ItemDetail;