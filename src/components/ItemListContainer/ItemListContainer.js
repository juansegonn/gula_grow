import react, {useEffect, useState} from "react";
import './ItemListContainer.css';
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


    return  (
        <div className="container">
            { products.length === 0 ? <p>Cargando...</p> : <ItemList products={ products }/> }
        </div>
    )
}

export default ItemListContainer;
