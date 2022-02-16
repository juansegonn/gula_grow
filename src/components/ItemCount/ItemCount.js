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
        if (contador > 0){
            setContador(contador - 1)
        }
    }

    function agregarItems () {
        onAdd(contador)
    }

    return (
        <div className="contador__container">
           <div className="botones__container">
                <button className="btn btn__restar" type="button" onClick={ restar }>-</button>
                <p className="contador">{ contador }</p>
                <button className="btn btn__restar" type="button" onClick={ sumar }>+</button>
           </div>
           <div  className="agregar__container">
               <button className="btn__agregar" onClick={ agregarItems }>agregar al carrito</button>   
            </div> 
        </div>
    )
}

export default ItemCount;