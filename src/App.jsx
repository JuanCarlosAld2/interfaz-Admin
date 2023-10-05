import React,{ useEffect, useState } from 'react'
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import FormCustom from './components/FormCustom/FormCustom';
import  CreateProduct from './components/CreateProduct/CreateProduct';
import { useSelector } from 'react-redux';
import NavBar from './components/Navbar/NavBar';
import EditProduct from './components/EditProduct/EditProduct';
import Orders from './components/Orders/Orders';
import UserEdit from './components/UserEdit/UserEdit';
import Users from './components/Users/Users';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const [access,setAccess] =useState(false);
//   const EMAIL = 'admin@gmail.com';
//   const PASSWORD = 'admin123';

  const user = useSelector((state) => state.user);

  function login(userData) {
    if (user.email === userData.email) {
      setAccess(true);
      navigate('/home');
    }else{
      alert("usuario o contraseña invalida")
    }
}

 useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  return (
    <>
    {location.pathname !== "/" && <NavBar/>}
        <Routes>
          <Route path={'/'} element={<Login login={login}/>}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path={'/custom'} element={<FormCustom/>}/>
          <Route path={'/product'} element={<CreateProduct/>}/>
          <Route path={'/edit-product'} element={<EditProduct/>}/>
          <Route path={'/edit-user'} element={<UserEdit/>}/>
          <Route path={'/orders'} element={<Orders/>}/>
          <Route path={'/users'} element={<Users/>}/>


        </Routes>
        
    </>
  )
}

export default App
