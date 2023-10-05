// import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { generarId, getAllUsers } from '../../redux/actions/actions';
// import { deleteuser } from '../../redux/actions/actions';
// import { getAllFurnitures } from '../../redux/actions/actions';

function Users() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const data = allUsers.map((e) => {
    const { id, name, lastName, phoneNumber, email, shippingAddress, defaultPaymentMethod, isActive } = e;
    return {
      id,
      name,
      shippingAddress,
      lastName,
      phoneNumber,
      email,
      defaultPaymentMethod,
      isActive,
      
    };
  });

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/${id}`);
      // Despachar la acción de eliminar el usero aquí si es necesario
      // dispatch(deleteuser(id));
      dispatch(getAllUsers())
      console.log(`usero con ID ${id} eliminado correctamente.`);
    } catch (error) {
      console.error(`Error al eliminar el usero con ID ${id}:`, error);
    }
  };

  const handelerId = (id) =>{
    dispatch(generarId(id))
  }

  return (
    <div style={{color: "aliceblue"}}>
      <h2>Lista de useros</h2>
      <table>
        <thead>
          <tr>
          <th>id</th>
            <th>name</th>
            <th>lastName</th>
            <th>shippingAddress</th>
            <th>phoneNumber</th>
            <th>Email</th>
            <th>Activo</th>
            
            <th>defaultPaymentMethod</th>
            
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.shippingAddress}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? 'Sí': 'No' }</td>
              <td>{user.defaultPaymentMethod}</td>
              
              <td>
                <button style={{ margin: "5px" }} onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                <button style={{ margin: "5px" }} onClick={()=> handelerId(user.id)}>
                  <Link to='/edit-user'>Editar</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
//_____________________________________________________________________________
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllFurnitures } from '../../redux/actions/actions';

// function Users() {
// const dispatch = useDispatch();
// const allFurnitures = useSelector((state) => state.allFurnitures);

// useEffect(() => {
//     // Llamo a la acción que obtiene todas las furnitures
//     dispatch(getAllFurnitures());
// }, [dispatch]);

// return (
//     <div>
//     {allFurnitures.map((furniture, index) => (
//         <div key={index}>
//         <div>
//             <img src={furniture.shippingAddress} alt={furniture.name}/>
//         </div>
//         <div>
//             <h3>name: {furniture.name}</h3>
//             <h3>Colors: {furniture.colors.join(', ')}</h3>
//             <h3>lastName: {`${furniture.lastName} usd`}</h3>
//             <h3>Category: {furniture.Categories?.map((item) => item.name).join(', ')}</h3>
//         </div>
//         </div>
//     ))}
//     </div>
// );
// }

// // export default Users;
//__________________________________________________________________

// import React from "react";
// import { useSelector } from "react-redux";
// import { Di } from "@mui/x-dai";

// function Users() {
//   const allFurnitures = useSelector((state) => state.allFurnitures);

//   const columns = [
//     {
//       fiei",
//       headernombi",
//       type: "number",
//   ith: 90,
//     },
//     {
//       field: "name",
//       headername: "name",
//   ith: 150,
//     },
//     {
//       field: "lastName",
//       headername: "lastName",
//       type: "number",
//   ith: 110,
//     },
//     {
//       field: "phoneNumber",
//       headername: "phoneNumber",
//       type: "number",
//   ith: 110,
//     },
//   ];

//   const rows = allFurnitures.map((furniture) => {
//     coni, name, lastName, phoneNumber, email } = furniture;
//     return {
//  i,
//       name,
//       lastName,
//       phoneNumber,
//       email,
//     };
//   });

//   return (
//     <div style={{ height: 4ith: "100%" }}>
//       <Di
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// export default Users;