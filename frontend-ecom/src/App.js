import {Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

//Website 
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProduct  from './components/CategoryProduct';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';

//Customers Panel
import Register from './components/customer/Register';
import Login from './components/customer/Login';
import Dashboard from './components/customer/Dashboard';
import Orders from './components/customer/Orders';
import Wishlist from './components/customer/Wishlist';
import Profile from './components/customer/Profile';
import ChangePassword from './components/customer/ChangePassword';
import AddressList from './components/customer/AddressList';


function App() {
  return (
    <><Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProduct/>}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order/success' element={<OrderSuccess/>}/>
        <Route path='/order/failure' element={<OrderFailure/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/dashboard' element={<Dashboard/>}/>
        <Route path='/customer/orders' element={<Orders/>}/>
        <Route path='/customer/wishlist' element={<Wishlist/>}/>
        <Route path='/customer/profile' element={<Profile/>}/>
        <Route path="/customer/change-password"element={<ChangePassword/>}/>
        <Route path="/customer/addresses"element={<AddressList/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
