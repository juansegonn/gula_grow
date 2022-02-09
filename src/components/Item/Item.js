import './Item.css'
import { Link } from 'react-router-dom'

function Item ({ item }) {
    return(
        <div className='container'> 
            <Link to={ `/producto/${item.id}` }>
                <p className='seeds'>x 3 seeds <i className="fas fa-venus"></i></p>
                <p className='price'>{ item.precio }</p>
                <p className='nombre'>{ item.nombre }</p>
                <img className='imagen' src={ item.img } alt="imagen del producto"/>
            </Link>
        </div>
    )
}

export default Item;