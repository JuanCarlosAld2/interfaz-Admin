// import { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getAllFurnitures } from '../../redux/actions/actions';
import { Link } from 'react-router-dom';
// import { deleteProduct } from '../../redux/actions/actions';
// import { getAllFurnitures } from '../../redux/actions/actions';
import { generarId } from '../../redux/actions/actions';

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

  const handelerId = (id) =>{
    dispatch(generarId(id))
  }

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

                <button style={{ margin: "5px" }} onClick={()=> handelerId(product.id)}>
                  <Link to='/edit-product'>Editar</Link>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
