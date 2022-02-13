import react, { useState } from "react";
import './ItemCount.css';

function ItemCount ({ stock, initial, onAdd,}) {
 
const [contador, setContador] = useState(initial);

    function sumar (){
        if (contador < stock){
            setContador(contador + 1)
      }
    } 

    function restar (){
        if (contador){
            setContador(contador - 1)
        }
    }

    return (
        <div className="contador__container">
           <div className="quatity">
                <button className="btn minus-btn disable" type="button" onClick={ restar }>-</button>
                <p id="quatity" className="contador">{ contador }</p>
                <button className="btn plus-btn" type="button" onClick={ sumar }>+</button>
           </div>
           <div  className="agregar__container">
               <button className="agregar" onClick={ () => onAdd(contador) }>agregar al carrito</button>   
            </div> 
        </div>
    )
}

export default ItemCount;