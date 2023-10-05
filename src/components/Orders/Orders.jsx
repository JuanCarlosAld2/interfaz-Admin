// import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllOrders } from '../../redux/actions/actions';
// import { deleteProduct } from '../../redux/actions/actions';
// import { getAllFurnitures } from '../../redux/actions/actions';

function Orders() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.allOrders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const data = allOrders.map((e) => {
    const { ordenId, nombre, apellido, telefono, email, direccion, nota, orderDate, total, status } = e;
    return {
      ordenId,
      nombre,
      direccion,
      apellido,
      telefono,
      email,
      nota,
      orderDate,
      total,
      status,
    };
  });

  // const handleDeleteProduct = async (ordenId) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/product/${ordenId}`);
  //     // Despachar la acción de eliminar el producto aquí si es necesario
  //     // dispatch(deleteProduct(ordenId));
  //     dispatch(getAllOrders())
  //     console.log(`Producto con ordenId ${ordenId} eliminado correctamente.`);
  //   } catch (error) {
  //     console.error(`Error al eliminar el producto con ordenId ${ordenId}:`, error);
    // }
  // };

  return (
    <div style={{color: "aliceblue"}}>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ordenId</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>direccion</th>
            <th>telefono</th>
            <th>Email</th>
            <th>Fecha</th>
            <th>Estatus</th>
            <th>Nota</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.ordenId}>
              <td>{product.ordenId}</td>
              <td>{product.nombre}</td>
              <td>{product.apellido}</td>
              <td>{product.direccion}</td>
              <td>{product.telefono}</td>
              <td>{product.email}</td>
              <td>{product.orderDate}</td>
              <td>{product.status}</td>
              <td>{product.nota}</td>
              <td>{product.total}</td>
              <td>
                {/* <button style={{ margin: "5px" }}>Eliminar</button> */}
                <button style={{ margin: "5px" }}>Editar</button>
                {/* <Link to='/edit-product' ordenId={product.ordenId}></Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
//_____________________________________________________________________________
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllFurnitures } from '../../redux/actions/actions';

// function Orders() {
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
//             <img src={furniture.direccion} alt={furniture.nombre}/>
//         </div>
//         <div>
//             <h3>nombre: {furniture.nombre}</h3>
//             <h3>Colors: {furniture.colors.join(', ')}</h3>
//             <h3>apellido: {`${furniture.apellido} usd`}</h3>
//             <h3>Category: {furniture.Categories?.map((item) => item.nombre).join(', ')}</h3>
//         </div>
//         </div>
//     ))}
//     </div>
// );
// }

// // export default Orders;
//__________________________________________________________________

// import React from "react";
// import { useSelector } from "react-redux";
// import { DataGrordenId } from "@mui/x-data-grordenId";

// function Orders() {
//   const allFurnitures = useSelector((state) => state.allFurnitures);

//   const columns = [
//     {
//       field: "ordenId",
//       headernombre: "ordenId",
//       type: "number",
//       wordenIdth: 90,
//     },
//     {
//       field: "nombre",
//       headernombre: "nombre",
//       wordenIdth: 150,
//     },
//     {
//       field: "apellido",
//       headernombre: "apellido",
//       type: "number",
//       wordenIdth: 110,
//     },
//     {
//       field: "telefono",
//       headernombre: "telefono",
//       type: "number",
//       wordenIdth: 110,
//     },
//   ];

//   const rows = allFurnitures.map((furniture) => {
//     const { ordenId, nombre, apellido, telefono, email } = furniture;
//     return {
//       ordenId,
//       nombre,
//       apellido,
//       telefono,
//       email,
//     };
//   });

//   return (
//     <div style={{ height: 400, wordenIdth: "100%" }}>
//       <DataGrordenId
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// export default Orders;