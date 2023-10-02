import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFurnitures } from '../../redux/actions/actions';

function ProductList() {
const dispatch = useDispatch();
const allFurnitures = useSelector((state) => state.allFurnitures);

useEffect(() => {
    // Llamo a la acción que obtiene todas las furnitures
    dispatch(getAllFurnitures());
}, [dispatch]);

return (
    <div>
    {allFurnitures.map((furniture, index) => (
        <div key={index}>
        <div>
            <img src={furniture.image} alt={furniture.name}/>
        </div>
        <div>
            <h3>Name: {furniture.name}</h3>
            <h3>Colors: {furniture.colors.join(', ')}</h3>
            <h3>Price: {`${furniture.price} usd`}</h3>
            <h3>Category: {furniture.Categories?.map((item) => item.name).join(', ')}</h3>
        </div>
        </div>
    ))}
    </div>
);
}

export default ProductList;

