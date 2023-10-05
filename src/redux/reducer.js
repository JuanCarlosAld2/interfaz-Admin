import { GET_ALL_FURNITURES, GET_ALL_ORDERS, LOGIN_GET_USER, LOGIN_SUCCESS, LOGOUT, ID, GET_ALL_USERS, ROLE } from "./actions/actions";

const initialState = {
  prueba: [],
  allFurnitures: [],
  allOrders: [],
  allUsers: [],
  allCategory: [],
  token: null,
  user: {},
  id:"",
  role:""
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
      case GET_ALL_USERS:
      return {
        ...state,
        allUsers: payload
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
    case ROLE:
      return{
        ...state,
        role:payload
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
