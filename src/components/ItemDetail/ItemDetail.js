import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail ({ producto}) {

    function agregarItems(cantidad){
        console.log(`se agregaron ${cantidad} productos correctamente`)
    }


    return (
        <div className="details">
            <div className="big-img">
                <img src= { producto.img }/>    
            </div>
            <div className="box">
                <div className="row">
                    <h2>{ producto.nombre }</h2>
                    <span>${ producto.precio }</span>
                </div>
                <div className="box__bot">
                    <p>Cantidad de THC: { producto.porcTHC }</p>
                </div>
            <p>Tiempo de flowering: { producto.flowering }</p>
            <p>Indica: { producto.porcIND }</p>
            <p>Sativa: { producto.porcSAT }</p>
            <ItemCount stock={ producto.stock } initial={ 1 } onAdd={ agregarItems }></ItemCount>
            </div>
        </div>
    )
}

export default ItemDetail;