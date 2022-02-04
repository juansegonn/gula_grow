import './Item.css'

function Item ({ item }) {
    return(
        <div className='container'> 
            <div className='container__top'>
                <p className='seeds'>x 3 seeds <i className="fas fa-venus"></i></p>
                <p className='price'>{ item.precio }</p>
            </div>
            <img className='imagen' src={ item.img } alt="imagen del producto"/>
            <p className='nombre'>{ item.nombre }</p>
         </div>
    )
}

export default Item;