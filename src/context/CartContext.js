import { createContext, useState } from 'react';

export const CartContext = createContext ([])

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([])

    const addToCart = (cantidad, producto) =>{
        if (isOnCart(producto.id)){
            sumarCantidad(cantidad, producto)
        } else{
            setCart([...cart, {...producto, cantidad}])
        }
    }
    console.log(cart)
    
    //revisar si esta en el carrito
    const isOnCart = (id) => {
        const respuesta = cart.some((productos) => productos.id === id)
        return respuesta
    }

    //borrar item
    const deleteItem = (id) =>{
        setCart(cart.filter((producto) => producto.id !== id ))
    }

    //vaciar carrito
    const vaciarCarrito = () =>{
        setCart([])
    }

    //sumar cantidad
    const sumarCantidad = (cantidad, producto) => {
        const copia = [...cart]
        copia.forEach((item)=>{
            if (item.id === producto.id) {
                item.cantidad += cantidad
            }
        })
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, vaciarCarrito, deleteItem }}>
            { children } 
         </CartContext.Provider> 
    )
}

export default CartContextProvider