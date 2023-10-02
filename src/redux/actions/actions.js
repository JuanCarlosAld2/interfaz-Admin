import axios from "axios";

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



export function crearProduct(product) {
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
