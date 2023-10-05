import axios from "axios";
import { getUserInfoFromLocalStorage } from "../../helpers/AuthToken";
export const GET_ALL_FURNITURES = "GET_ALL_FURNITURES";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_GET_USER = "LOGIN_GET_USER"
export const LOGOUT = "LOGOUT"
export const ID= "ID"
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ALL_USERS = "GET_ALL_USERS"


export const getAllFurnitures = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/product/all-admin");

      // Ordenar los datos por id de menor a mayor
      const sortedData = response.data.sort((a, b) => a.id - b.id);

      dispatch({ type: GET_ALL_FURNITURES, payload: sortedData });
    } catch (error) {
      console.error("Error al intentar renderizar los muebles", error.message);
    }
  };
};
export const getAllOrders = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get("http://localhost:3001/user");
        dispatch({ type: GET_ALL_USERS, payload: data });
      } catch (error) {
        alert("Error al intentar renderizar los muebles")
        console.error("Error al intentar renderizar los muebles", error.message);
      }
    };
  };
  export const getAllUsers = () => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get("http://localhost:3001/order");
        dispatch({ type: GET_ALL_USERS, payload: data });
      } catch (error) {
        alert("Error al intentar renderizar los muebles")
        console.error("Error al intentar renderizar los muebles", error.message);
      }
    };
  };
export function createCustom(data) {
  return async (dispatch) => {
    try {
      const URL = "http://localhost:3001/user/create-customer"; // Corregir la coma a un punto y coma
      await axios.post(URL, data);
      alert("cliente creado con exito");
    } catch (error) {
      alert("Error al crear custom");
      console.error("Error al crear custom:", error);
    }
  };
}
export function createProduct(product) {
  return async (dispatch) => {
    try {
      // console.log("actions:::",product);
      const URL = "http://localhost:3001/product/create";
      await axios.post(URL, product);
      alert("producto creado con exito");
    } catch (error) {
      console.error("No se puedo crear producto", error.message);
    }
  };
}
export function updateProduct(id, product) {
    return async (dispatch) => {
      try {
        //console.log("actions:::",id,product);
        const URL = `http://localhost:3001/product/update/${id}`;
        await axios.put(URL, product);
        alert("producto creado con exito");
      } catch (error) {
        console.error("No se puedo crear producto", error.message);
      }
    };
  }
export const deleteProduct = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/product/${id}`);
    return dispatch({ type: DELETE_PRODUCT, payload: id });
  };
};

export const editProduct = (payload) => {
  return async function (dispatch) {
    await axios.put(
      `http://localhost:3001/product/update/${payload.id}`,
      payload
    );
    return dispatch({ type: EDIT_PRODUCT, payload: payload });
  };
};

export const loginSuccess = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/loginadmin",
        form
      );
      const { tokenSession, data } = response.data;
      console.log("data", response.data);
      localStorage.setItem("token", tokenSession);
      localStorage.setItem("user", JSON.stringify({ data }));
      dispatch({ type: LOGIN_SUCCESS, payload: tokenSession });
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };
};
export const loginGetUser = (token) => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/user/authadmin", {
        headers: {
          Authorization: token,
        },
      });
      const user = response.data;
      getUserInfoFromLocalStorage();
      dispatch({ type: LOGIN_GET_USER, payload: user });
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  return {
    type: LOGOUT,
  };
};


export const generarId= (id) =>{
  return{
    type:ID,
    payload:id
  }
}