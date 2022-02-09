import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import './ItemDetailContainer.css'; 
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer (){
    const[producto, setProducto] = useState ()
    const { productoId } = useParams()

    useEffect (() => {
        
        getProducts().then((productos) => {
           const producto = productos.find((i) => i.id === Number(productoId))
           setProducto(producto)
        }).catch((error) => {
            console.log(error)
        })
    }, [productoId])

    return (
        <div className="item__detail__container">
            {!producto ? <p>cargando producto...</p> : <ItemDetail producto = { producto }/>}
        </div>
    )
}

export default ItemDetailContainer;
