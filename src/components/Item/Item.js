import './Item.css'

function Item ({ item }) {
    return(
        <div> 
            <img className='imagen' src={ item.img } alt="imagen del producto"/>
            <p className='price'>{ item.precio }</p>
            <p className='nombre'>{ item.nombre }</p>
         </div>
    )
}

export default Item;