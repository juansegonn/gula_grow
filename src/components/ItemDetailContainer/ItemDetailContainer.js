import { useEffect, useState } from "react";
import { getProducts } from "../../api/api";
import './ItemDetailContainer.css'; 
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer (){
    const[producto, setProducto] = useState ([])

    useEffect (() => {
        getProducts().then((productos) => {
           const producto = productos.find((i) => i.id === 1)
           console.log(producto) 
           setProducto(producto)

        })
    }, [])

    return (
        <div>
            <ItemDetail producto = { producto }/>
        </div>
    )
}

export default ItemDetailContainer;