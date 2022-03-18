import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext ([])

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState(()=>{
        const storageData = localStorage.getItem('items')
        return storageData ? JSON.parse(storageData) : []
    })

    useEffect(() =>{
        window.localStorage.setItem('items', JSON.stringify(cart))
    }, [cart])

    const addToCart = (cantidad, producto) =>{
        if (isOnCart(producto.id)){
            sumarCantidad(cantidad, producto)
        } else{
            setCart([...cart, {...producto, cantidad}])
        }
    }
    
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

    //suma de total
    const total = () => {
        const sumaTotal = cart.reduce((x, y) => x + y.precio * y.cantidad, 0)
        return sumaTotal
      }

    const unidades = () => {
        const numeros = cart.reduce((x, y) => x + y.cantidad, 0);
        return numeros;
      };
      

    return (
        <CartContext.Provider value={{ cart, addToCart, vaciarCarrito, deleteItem, total, unidades }}>
            { children } 
         </CartContext.Provider> 
    )
}

export default CartContextProvider