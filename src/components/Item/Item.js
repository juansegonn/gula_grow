import './Item.css'
import { Link } from 'react-router-dom'

function Item ({ item }) {
    return(
        <div className='container'> 
            <Link to={ `/producto/${item.id}` }>
                <div className='container__top'>
                    <p className='seeds'>x 3 seeds <i className="fas fa-venus"></i></p>
                    <p className='price'>${ item.precio }</p>
                </div> 
                <div className='container__bot'>
                    <p className='nombre'>{ item.nombre }</p>   
                    <img className='imagen' src={ item.img } alt="imagen del producto"/>
                </div>
            </Link>
        </div>
    )
}

export default Item;