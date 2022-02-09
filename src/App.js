import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Link, Route, Routes } from 'react-router-dom'
 
function App() {
  return (
    <div className="App">
        <NavBar/>
      <main>
        <Routes>
          <Route path="/" element= { <ItemListContainer/> }/> 
          <Route path="/producto/:productoId" element = { <ItemDetailContainer/> }/>
          <Route path="/category/:categoryName" element = { <ItemListContainer/> }/>
          <Route path="*" element={
            <div>
              <h2>PAGINA NO ENCONTRADA</h2>
              <Link to="/">{'<<'}volver al inicio  </Link>
            </div>
          }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
