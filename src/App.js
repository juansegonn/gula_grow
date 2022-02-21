import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Link, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart,';
 
function App() {
  return (
    <CartContextProvider>
      <div className="App">
             <NavBar/>
        <main>
          <Routes>
            <Route path="/" element= { <ItemListContainer/> }/> 
            <Route path="/producto/:productoId" element = { <ItemDetailContainer/> }/>
            <Route path="/category/:categoryName" element = { <ItemListContainer/> }/>
            <Route path='/cart' element ={ <Cart/> }/>
            <Route path="*" element={
              <div>
                <h2>PAGINA NO ENCONTRADA</h2>
                <Link to="/">{'<<'}volver al inicio  </Link>
              </div>
            }/>
          </Routes>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;
