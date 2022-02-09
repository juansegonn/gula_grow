import './ItemDetail.css';

function ItemDetail ({ producto}) {
    return (
        <div className="container">
            <img src= { producto.img }/>
            <p>Genetica: { producto.nombre }</p>
            <p>Cantidad de THC: { producto.porcTHC }</p>
            <p>Tiempo de flowering: { producto.flowering }</p>
            <p>Indica: { producto.porcIND }</p>
            <p>Sativa: { producto.porcSAT }</p>
        </div>
    )
}

export default ItemDetail;