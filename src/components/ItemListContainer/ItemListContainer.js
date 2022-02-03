import react, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../api/api'; 
import ItemList from '../ItemList/ItemList';

 function ItemListContainer() {
    const[products, setProducts] = useState([])
    
    useEffect(() => {

        getProducts().then(function(products){
            console.log(products)

            setProducts(products)
        })
    }, [])


    function agregarItems(cantidad){
        console.log(`se agregaron ${cantidad} productos correctamente`)
    }


    return  (
        <div className="repro__container">
            { products.length > 0 ? <ItemList products={ products }/> : <p>Cargando...</p>}
            <ItemCount stock={ 5 } initial={ 1 } onAdd={ agregarItems } />
        </div>
    )
}

export default ItemListContainer;

