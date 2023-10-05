import { GET_ALL_FURNITURES, LOGIN_GET_USER, LOGIN_SUCCESS, LOGOUT,ID } from "./actions/actions";

const initialState = {
  prueba: [],
  allFurnitures: [],
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
