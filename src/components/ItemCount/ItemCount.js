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
        if (contador > 0){
            onAdd(contador)
        }
    }

    return (
        <div className="botonera">
           <div className="botones__container">
                <button className="btn btn__restar" type="button" onClick={ restar }>-</button>
                <div className="container__contador">
                    <h2 className="contador">{ contador }</h2>
                </div>
                <button className="btn btn__restar" type="button" onClick={ sumar }>+</button>
           </div>
           <div  className="agregar__container">
               <button className="btn__agregar" onClick={ agregarItems }>AGREGAR AL CARRITO</button>   
            </div> 
        </div>
    )
}

export default ItemCount;