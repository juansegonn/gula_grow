import react from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

 function ItemListContainer() {

    function agregarItems(){
        console.log("se agregaron los productos correctamente")
    }


    return  (
        <div className="repro__container">
            <ItemCount stock={ 5 } initial={ 1 } onAdd={ agregarItems }/>
        </div>
    )
}

export default ItemListContainer;