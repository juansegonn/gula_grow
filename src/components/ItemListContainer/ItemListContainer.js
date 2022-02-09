import react, {useEffect, useState} from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../api/api'; 
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

 function ItemListContainer() {
    const[products, setProducts] = useState([])
    const { categoryName } = useParams()


    
    useEffect(() => {

        getProducts().then((products) => { 
            if (!categoryName) {
                setProducts(products)
            }else{
                const productosFiltrados = products.filter((producto) => {
                    return producto.category === categoryName
                })
                setProducts(productosFiltrados)
            }
        }).catch((error) =>{
            console.log(error)
        })
    }, [categoryName])


    function agregarItems(cantidad){
        console.log(`se agregaron ${cantidad} productos correctamente`)
    }


    return  (
        <div className="container">
            { products.length === 0 ? <p>Cargando...</p> : <ItemList products={ products }/> }
            { /* <ItemCount stock={ 5 } initial={ 1 } onAdd={ agregarItems } /> */ }
        </div>
    )
}

export default ItemListContainer;
