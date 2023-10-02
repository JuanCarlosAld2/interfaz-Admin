import React,{ useEffect, useState } from 'react'
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import FormCustom from './components/FormCustom/FormCustom';
import  CreateProduct from './components/CreateProduct/CreateProduct';

function App() {

  const navigate = useNavigate();

  const [access,setAccess] =useState(false);
  const EMAIL = 'admin@gmail.com';
  const PASSWORD = 'admin123';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }else{
      alert("usuario o contraseña invalida")
    }
}

//  useEffect(() => {
//   !access && navigate('/');
// }, [access, navigate]);

  return (
    <>
        <Routes>
          <Route path={'/'} element={<Login login={login}/>}></Route>
          <Route path={'/home'} element={<Home/>}></Route>
          <Route path={'/custom'} element={<FormCustom/>}></Route>
          <Route path={'/product'} element={<CreateProduct/>}></Route>

        </Routes>
        
    </>
  )
}

export default App
