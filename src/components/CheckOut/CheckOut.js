import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
  const { cart, vaciarCarrito, total } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const [emailConfirm, setEmailConfirme] = useState("")
  const [name, setName] = useState("")
  const [orderId, setOrderId] = useState("")
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const newOrder = {
        date: new Date(),
        buyer: { email, name },
        items: cart,
        total: total(),
  };
  addDoc(collection(db, 'orders'), newOrder)
        .then((res) => {
          setOrderId(res.id)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
          vaciarCarrito()
        })
  };

  if (orderId !== '') {
    return <h2> El Id de tu compra es: { orderId }</h2>
  }
  return (
    <>
     {cart.length === 0 ? (
                <>
                    <h2>Carrito Vacio</h2>
                    <Link to="/">{'<<'}volver al inicio </Link>
                </>
            ) : (
        <div className="formulario__container">
          <form onSubmit={handleSubmit} className="data">
            <p>Nombre</p>
            <input
              onChange={ (e) => setName(e.target.value)}
              name={name}
              type="text"
              placeholder="Nombre"
              required
            />
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <p>Email(confirmar)</p>
            <input
              onChange={(e) => setEmailConfirme(e.target.value)}
              name="emailConfirm"
              type="email"
              placeholder="Confirmar Email"
              required
            />
            <button className="" disabled={email !== emailConfirm} >
              {loading ? 'Generando orden...' : 'Finalizar compra'}
            </button>
          </form>
          <div className="rows">
            <button onClick={ vaciarCarrito }> Vaciar carrito</button>
            <div className="col">Precio total</div>
            <div className="col text-right">${total()}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default CheckOut