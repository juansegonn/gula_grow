import { useEffect, useState } from "react";
import './ItemDetailContainer.css'; 
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../../firebase"

function ItemDetailContainer (){
    const[producto, setProducto] = useState ()
    const { productoId } = useParams()

    useEffect (() => {
    const itemRef = doc(db, "products", productoId)
        getDoc(itemRef)
        .then((snapshot) => {

            if(snapshot.exists()) {
                setProducto({ id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error => {
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
