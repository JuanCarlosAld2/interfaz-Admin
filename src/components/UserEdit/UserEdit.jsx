import React, { useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import style from '../CreateProduct/CreateProduct.module.css'
import { updateUser } from '../../redux/actions/actions';

function UserEdit() {

    const dispatch =useDispatch();
    const id = useSelector((state)=>state.id)

    const [dataCustom, setDataCustom] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
        shippingAddress:"",
        role:""
    })

const handleInputs = (e) =>{
  const { name, value } = e.target;
  setDataCustom({
  ...dataCustom,
  [name]: value,
  });

}
   
const handleSubmit = (e) =>{
e.preventDefault()
dispatch(updateUser(id,dataCustom))
location.reload(true)

}
return (
<form onSubmit={handleSubmit} className={style.container}>
    {/* {console.log(id)} */}
        <h2>EDITAR USUARIO</h2>
        <br/>
        <label htmlFor="name">Name: </label>
        <input type="text" name='name' value={dataCustom.name} onChange={handleInputs}  />

        <br/>

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name='lastName' value={dataCustom.lastName} onChange={handleInputs}  />
        
        <br/>
        
        <label htmlFor="email">Enter a email: </label>
        <input type="email" name='email' value={dataCustom.email} onChange={handleInputs}  />
        
        <br/>
        
        <label htmlFor="password">Enter a password: </label>
        <input type="text" name='password' value={dataCustom.password} onChange={handleInputs} />
        
        <br/>
        
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input type="tel" name='phoneNumber' value={dataCustom.phoneNumber} onChange={handleInputs}  />
        
        <br/>
        
        <label htmlFor="shippingAddress">shipping Address: </label>
        <input type="text" name='shippingAddress' value={dataCustom.shippingAddress} onChange={handleInputs}/>
        
        <br/>

        <label htmlFor="role">Role: </label>
        <input type="text" name='role' value={dataCustom.role} onChange={handleInputs}/>

        <br/>
        
        <button type='submit'>Editar</button>        

</form>
)
}

export default UserEdit




























































// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // import style from '../';
// import { useDispatch, useSelector } from 'react-redux';
// import { editProduct, deleteProduct, getAllUsers } from '../../redux/actions/actions';

// const UserEdit = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const allUser = useSelector((state) => state.allUser);
//   const navigate = useNavigate();

//   const [usersEditado, setUsersEditado] = useState({
//     id: '',
//     name: '',
//     description: '',
//     colors: '',
//     price: '',
//     image: '',
//   });

//   const [edicionExitosa, setEdicionExitosa] = useState(false);

//   useEffect(() => {
//     if (!allUser.length) {
//       dispatch(getAllUsers());
//     }
//   }, [dispatch, allUser]);

//   useEffect(() => {
//     if (id && allUser.length) {
//       const editedUsers = allUser.find((item) => item.id === parseInt(id, 10));
//       setUsersEditado({
//         ...editedUsers,
//       });
//     }
//   }, [id, allUser]);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleEditSubmit = async () => {
//     try {
//       await dispatch(editProduct(usersEditado));
//       setEdicionExitosa(true);
      
//       // Redirige al usuario a la página de inicio después de guardar los cambios.
//       navigate.push('/home');
//     } catch (error) {
//       console.error('Error al editar el producto:', error);
//     }
//   };


//   const redireccionarAHome = () => {
//     navigate.push('/home');
//   };

//   const handleDeleteClick = async () => {
//     try {
//       await dispatch(deleteProduct(id));
//       navigate.push('/home');
//       setEliminacionExitosa(true);
//     } catch (error) {
//       console.error('Error al eliminar el producto:', error);
//     }
//   };

//   if (!allUser.length) {
//     return <div>Loading...</div>;
//   }

//   const furniture = allUser.find((item) => item.id === parseInt(id, 10));

//   if (!furniture) {
//     return <div>Furniture not found</div>;
//   }

//     const { image, name, price, colors, description } = furniture;
//     const colorString = Array.isArray(colors) ? colors.join(', ') : '';

//  return (
//     <div key={id} className={style.container}>
//     <div key={id} className={style.container}></div>
//     <div className={style.name}>
//         <img src={image} alt={name} />
//         <h3>Name: {name}</h3>
//         <h3>Colors: {colorString}</h3>
//         <h3>Description: {description}</h3>
//         <h3>Price: {`${price} usd`}</h3>

//         <div>
//         {isEditing ? (
//             <>
//             <input
//                 type="text"
//                 value={usersEditado.name}
//                 onChange={(e) => setUsersEditado({ ...usersEditado, name: e.target.value })}
//             />
//             <input
//                 type="text"
//                 value={usersEditado.id}
//                 onChange={(e) => setUsersEditado({ ...usersEditado, id: e.target.value })}
//             />
//             <input
//                 type="text"
//                 value={usersEditado.description}
//                 onChange={(e) => setUsersEditado({ ...usersEditado, description: e.target.value })}
//             />
//             <input
//                 type="text"
//                 value={usersEditado.colors}
//                 onChange={(e) => setUsersEditado({ ...usersEditado, colors: e.target.value })}
//             />
//             <input
//                 type="number"
//                 value={usersEditado.price}
//                 onChange={(e) => {
//                 const newValue = parseFloat(e.target.value);
//                 if (!isNaN(newValue)) {
//                     setUsersEditado({ ...usersEditado, price: newValue });
//                 }
//                 }}
//             />
//             <input
//                 type="text"
//                 value={usersEditado.image}
//                 onChange={(e) => setUsersEditado({ ...usersEditado, image: e.target.value })}
//             />
//             <button onClick={handleEditSubmit}>Guardar Cambios</button>
//             </>
//         ) : (
//             <>
//             {usersEditado && (
//             <>
//                 <button onClick={handleEditClick}>Editar</button>
//                 {edicionExitosa && (
//                     <div className={style.alert}>El producto fue editado con éxito.</div>
//                 )}
//                 </>
//             )}
//             <button onClick={handleDeleteClick}>Eliminar</button>
//             {eliminacionExitosa && (
//                 <div className={style.alert}>El producto fue eliminado con éxito.</div>
//             )}
//             </>
//         )}
//         </div>
//     </div>
//     </div>
// );
// };

// export default UserEdit;
