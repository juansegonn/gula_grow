import './ItemList.css';
import Item from '../Item/Item';


function ItemList ({ products }) {
    return (
        <div className="list">
            {
                products.map (function(producto) {
                    return (
                        <Item key={ producto.id } item={ producto } />
                    )
                })
            }
        </div>
    )
}

export default ItemList;  