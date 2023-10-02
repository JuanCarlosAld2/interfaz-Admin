import React, { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux';
import {createCustom} from '../../redux/actions/actions'



function FormCustom() {

    const dispatch =useDispatch();

    const [dataCustom, setDataCustom] = useState({
        "name":"",
        "lastName":"",
        "nikName":"",
        "email":"",
        "password":"",
        "phoneNumber":"",
        "shippingAddress":"",
    })

    const[errors,setErrors]=useState({
        "name":"",
        "lastName":"",
        "nikName":"",
        "email":"",
        "password":"",
        "phoneNumber":"",
        "shippingAddress":"",
    })

   
      

    
    const handleInputs = (e) => {
        const { name, value } = e.target;
        setDataCustom({
          ...dataCustom,
          [name]: value,
        });

      


      };

      

    const handleSubmit = (e)=>{ 
        e.preventDefault()

        dispatch(createCustom(dataCustom))

    }


  return (
   <form onSubmit={handleSubmit}>
        <h2>CREATE CUSTOMER</h2>
        <br/>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' value={dataCustom.name} onChange={handleInputs} placeholder='required field' />

        <br/>

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name='lastName' value={dataCustom.lastName} onChange={handleInputs} placeholder='required field' />

        <br/>

        <label htmlFor="nikName">NikName: </label>
        <input type="text" name='nikName' value={dataCustom.nikName} onChange={handleInputs} placeholder='required field' />
        
        <br/>
        
        <label htmlFor="email">Enter a email: </label>
        <input type="email" name='email' value={dataCustom.email} onChange={handleInputs} placeholder='required field'  />
        
        <br/>
        
        <label htmlFor="password">Enter a password: </label>
        <input type="text" name='password' value={dataCustom.password} onChange={handleInputs} placeholder='required field' />
        
        <br/>
        
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input type="tel" name='phoneNumber' value={dataCustom.phoneNumber} onChange={handleInputs} placeholder='field not necessary' />
        
        <br/>
        
        <label htmlFor="shippingAddress">shipping Address: </label>
        <input type="text" name='shippingAddress' value={dataCustom.shippingAddress} onChange={handleInputs} placeholder='field not necessary'/>
        
        <br/>
        
        <button type='submit'>Crear cliente</button>        

   </form>
  )
}

export default FormCustom
