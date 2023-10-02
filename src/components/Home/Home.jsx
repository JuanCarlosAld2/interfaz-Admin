import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFurnitures } from '../../redux/actions/actions';
import ProductList from '../ProductList/ProductList';
import NavBar from '../Navbar/NavBar'

const Home = () => {
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);

  useEffect(() => {
    dispatch(getAllFurnitures());
  }, [dispatch]);

  return (
    <div>
      <NavBar/>
      <h1>Lista de Productos</h1>
      <ProductList allFurnitures={allFurnitures} />
    </div>
  );
};

export default Home;

