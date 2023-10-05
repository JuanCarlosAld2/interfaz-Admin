// import { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getAllFurnitures } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
// import { deleteProduct } from '../../redux/actions/actions';
// import { getAllFurnitures } from '../../redux/actions/actions';

function ProductList() {
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);

//   useEffect(() => {
//     dispatch(getAllFurnitures());
//   }, []);

  const data = allFurnitures.map((e) => {
    const { id, name, price, stock, isActive, image } = e;
    return {
      id,
      name,
      image,
      price,
      stock,
      isActive,
    };
  });

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/product/${id}`);
      // Despachar la acción de eliminar el producto aquí si es necesario
      // dispatch(deleteProduct(id));
      dispatch(getAllFurnitures())
      console.log(`Producto con ID ${id} eliminado correctamente.`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><img src={product.image} alt={product.name} style={{ width: "50%", margin: "20px" }} /></td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.isActive ? 'Sí': 'No' }</td>
              <td>
                <button style={{ margin: "5px" }} onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                <button style={{ margin: "5px" }}>
                <Link to='/edit-product' id={product.id}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
//_____________________________________________________________________________
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllFurnitures } from '../../redux/actions/actions';

// function ProductList() {
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
//             <img src={furniture.image} alt={furniture.name}/>
//         </div>
//         <div>
//             <h3>Name: {furniture.name}</h3>
//             <h3>Colors: {furniture.colors.join(', ')}</h3>
//             <h3>Price: {`${furniture.price} usd`}</h3>
//             <h3>Category: {furniture.Categories?.map((item) => item.name).join(', ')}</h3>
//         </div>
//         </div>
//     ))}
//     </div>
// );
// }

// // export default ProductList;
//__________________________________________________________________

// import React from "react";
// import { useSelector } from "react-redux";
// import { DataGrid } from "@mui/x-data-grid";

// function ProductList() {
//   const allFurnitures = useSelector((state) => state.allFurnitures);

//   const columns = [
//     {
//       field: "id",
//       headerName: "Id",
//       type: "number",
//       width: 90,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 150,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       type: "number",
//       width: 110,
//     },
//     {
//       field: "stock",
//       headerName: "Stock",
//       type: "number",
//       width: 110,
//     },
//   ];

//   const rows = allFurnitures.map((furniture) => {
//     const { id, name, price, stock, isActive } = furniture;
//     return {
//       id,
//       name,
//       price,
//       stock,
//       isActive,
//     };
//   });

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// export default ProductList;