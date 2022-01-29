import react, { useState} from "react";
import './ItemCount.css';

function ItemCount ({ stock, initial, onAdd}) {
 
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
           <div className="botones__container">
                <button className="mas menos" onClick={ sumar }>+</button>
                <p className="contador">{ contador }</p>
                <button className="mas menos" onClick={ restar }>-</button>
           </div>
           <div  className="agregar__container">
               <button className="agregar" onClick={ onAdd }>agregar al carrito</button>   
            </div> 
        </div>
    )
}

export default ItemCount;