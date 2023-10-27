import './App.css';
import MainBody from './components/MainBody/MainBody';
import ProductPage from './components/Products/ProductPage'
import LoginPage from './components/LoginPage/LoginPage';
import { Routes, Route } from "react-router-dom";
import SignIn from './components/LoginPage/SignIn';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<MainBody />} />
      <Route path="/product/:id" element={<ProductPage />}/>
      <Route path="/Login" element={<LoginPage />}/>
      <Route path="/SignIn" element={<SignIn />}/>
      <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </>
    
  );
}

export default App;
