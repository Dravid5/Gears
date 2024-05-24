import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ShopCatogries } from './Pages/ShopCatogries';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/helmets' element={<ShopCatogries category="helmets"/>}></Route>
        <Route path='/jackets' element={<ShopCatogries category="jackets"/>}></Route>
        <Route path='/shoes' element={<ShopCatogries category="shoes"/>}></Route>
        <Route path='/gloves' element={<ShopCatogries category="gloves"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/signin' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
