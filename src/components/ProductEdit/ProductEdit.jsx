import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import style from '../Detail/Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFurnitures, editProduct, deleteProduct } from '../../components/redux/actions/Actions';

const ProductEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);
  const history = useHistory();

  const [productoEditado, setProductoEditado] = useState({
    id: '',
    name: '',
    description: '',
    colors: '',
    price: '',
    image: '',
  });

  const [edicionExitosa, setEdicionExitosa] = useState(false);

  useEffect(() => {
    if (!allFurnitures.length) {
      dispatch(getAllFurnitures());
    }
  }, [dispatch, allFurnitures]);

  useEffect(() => {
    if (id && allFurnitures.length) {
      const editedProduct = allFurnitures.find((item) => item.id === parseInt(id, 10));
      setProductoEditado({
        ...editedProduct,
      });
    }
  }, [id, allFurnitures]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    try {
      await dispatch(editProduct(productoEditado));
      setEdicionExitosa(true);
      
      // Redirige al usuario a la página de inicio después de guardar los cambios.
      history.push('/home');
    } catch (error) {
      console.error('Error al editar el producto:', error);
    }
  };


  const redireccionarAHome = () => {
    history.push('/home');
  };

  const handleDeleteClick = async () => {
    try {
      await dispatch(deleteProduct(id));
      history.push('/home');
      setEliminacionExitosa(true);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  if (!allFurnitures.length) {
    return <div>Loading...</div>;
  }

  const furniture = allFurnitures.find((item) => item.id === parseInt(id, 10));

  if (!furniture) {
    return <div>Furniture not found</div>;
  }

    const { image, name, price, colors, description } = furniture;
    const colorString = Array.isArray(colors) ? colors.join(', ') : '';

 return (
    <div key={id} className={style.container}>
    <div key={id} className={style.container}></div>
    <div className={style.name}>
        <img src={image} alt={name} />
        <h3>Name: {name}</h3>
        <h3>Colors: {colorString}</h3>
        <h3>Description: {description}</h3>
        <h3>Price: {`${price} usd`}</h3>

        <div>
        {isEditing ? (
            <>
            <input
                type="text"
                value={productoEditado.name}
                onChange={(e) => setProductoEditado({ ...productoEditado, name: e.target.value })}
            />
            <input
                type="text"
                value={productoEditado.id}
                onChange={(e) => setProductoEditado({ ...productoEditado, id: e.target.value })}
            />
            <input
                type="text"
                value={productoEditado.description}
                onChange={(e) => setProductoEditado({ ...productoEditado, description: e.target.value })}
            />
            <input
                type="text"
                value={productoEditado.colors}
                onChange={(e) => setProductoEditado({ ...productoEditado, colors: e.target.value })}
            />
            <input
                type="number"
                value={productoEditado.price}
                onChange={(e) => {
                const newValue = parseFloat(e.target.value);
                if (!isNaN(newValue)) {
                    setProductoEditado({ ...productoEditado, price: newValue });
                }
                }}
            />
            <input
                type="text"
                value={productoEditado.image}
                onChange={(e) => setProductoEditado({ ...productoEditado, image: e.target.value })}
            />
            <button onClick={handleEditSubmit}>Guardar Cambios</button>
            </>
        ) : (
            <>
            {productoEditado && (
            <>
                <button onClick={handleEditClick}>Editar</button>
                {edicionExitosa && (
                    <div className={style.alert}>El producto fue editado con éxito.</div>
                )}
                </>
            )}
            <button onClick={handleDeleteClick}>Eliminar</button>
            {eliminacionExitosa && (
                <div className={style.alert}>El producto fue eliminado con éxito.</div>
            )}
            </>
        )}
        </div>
    </div>
    </div>
);
};

export default ProductEdit;
