import axios from "axios";
export const GET_ALL_FURNITURES = 'GET_ALL_FURNITURES'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export const getAllFurnitures = () => {
    return async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/product");
        
        // Ordenar los datos por id de menor a mayor
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        
        dispatch({ type: GET_ALL_FURNITURES, payload: sortedData });
    } catch (error) {
        console.error("Error al intentar renderizar los muebles", error.message);
    }
    };
}
export function createCustom(data) {
return async (dispatch) => {
    try {
    const URL = "http://localhost:3001/user/create-customer"; // Corregir la coma a un punto y coma
    await axios.post(URL, data);
    alert("cliente creado con exito")
    } catch (error) {
    alert("Error al crear custom")
    console.error("Error al crear custom:", error);
    }
};
}
export function createProduct(product) {
return async (dispatch)=>{
    try {
      // console.log("actions:::",product);
        const URL = "http://localhost:3001/product/create"
        await axios.post(URL,product)
        alert("producto creado con exito")
    } catch (error) {
    console.error(
        "No se puedo crear producto",
        error.message
    );
    }
}
}
export const deleteProduct = (id) => {
    return async function (dispatch) {
        await axios.delete(`http://localhost:3001/product/${id}`);
        return dispatch({ type: DELETE_PRODUCT, payload: id })
    }
}

export const editProduct = (payload) => {
    return async function (dispatch) {
        await axios.put(`http://localhost:3001/product/update/${payload.id}`, payload);
        return dispatch({ type: EDIT_PRODUCT, payload: payload })
    }
}