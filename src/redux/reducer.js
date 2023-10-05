<<<<<<< HEAD
import { GET_ALL_FURNITURES, LOGIN_GET_USER, LOGIN_SUCCESS, LOGOUT,ID } from "./actions/actions";
=======
import { GET_ALL_FURNITURES, GET_ALL_ORDERS, LOGIN_GET_USER, LOGIN_SUCCESS, LOGOUT } from "./actions/actions";
>>>>>>> af8daf07208625b99403a6e0d765a6d75cb91b4c

const initialState = {
  prueba: [],
  allFurnitures: [],
  allOrders: [],
  allCategory: [],
  token: null,
  user: {},
  id:""
};

const rootReducer = (state = initialState, { type, payload }) => {
    console.log("Reducer type:", type); // Agregado para depuración
  console.log("Reducer payload:", payload); // Agregado para depuración
  switch (type) {
    case GET_ALL_FURNITURES:
      return {
        ...state,
        allFurnitures: payload,
        temporal: payload,
      };
      case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
      };

    case LOGIN_GET_USER:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: {},
      }; 

    case ID:
      return{
        ...state,
        id:payload
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
