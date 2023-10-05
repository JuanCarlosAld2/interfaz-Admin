import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import style from '../Detail/Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, editUser, deleteProduct } from '../../components/redux/actions/Actions';

const UserEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser);
  const history = useHistory();

  const [usersEditado, setUsersEditado] = useState({
    id: '',
    name: '',
    description: '',
    colors: '',
    price: '',
    image: '',
  });

  const [edicionExitosa, setEdicionExitosa] = useState(false);

  useEffect(() => {
    if (!allUser.length) {
      dispatch(getAllUser());
    }
  }, [dispatch, allUser]);

  useEffect(() => {
    if (id && allUser.length) {
      const editedUsers = allUser.find((item) => item.id === parseInt(id, 10));
      setUsersEditado({
        ...editedUsers,
      });
    }
  }, [id, allUser]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = async () => {
    try {
      await dispatch(editUser(usersEditado));
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

  if (!allUser.length) {
    return <div>Loading...</div>;
  }

  const furniture = allUser.find((item) => item.id === parseInt(id, 10));

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
                value={usersEditado.name}
                onChange={(e) => setUsersEditado({ ...usersEditado, name: e.target.value })}
            />
            <input
                type="text"
                value={usersEditado.id}
                onChange={(e) => setUsersEditado({ ...usersEditado, id: e.target.value })}
            />
            <input
                type="text"
                value={usersEditado.description}
                onChange={(e) => setUsersEditado({ ...usersEditado, description: e.target.value })}
            />
            <input
                type="text"
                value={usersEditado.colors}
                onChange={(e) => setUsersEditado({ ...usersEditado, colors: e.target.value })}
            />
            <input
                type="number"
                value={usersEditado.price}
                onChange={(e) => {
                const newValue = parseFloat(e.target.value);
                if (!isNaN(newValue)) {
                    setUsersEditado({ ...usersEditado, price: newValue });
                }
                }}
            />
            <input
                type="text"
                value={usersEditado.image}
                onChange={(e) => setUsersEditado({ ...usersEditado, image: e.target.value })}
            />
            <button onClick={handleEditSubmit}>Guardar Cambios</button>
            </>
        ) : (
            <>
            {usersEditado && (
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

export default UserEdit;
