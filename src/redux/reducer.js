import {GET_ALL_FURNITURES} from './actions/actions'

const initialState = {
    prueba: [],
    allFurnitures:[],
    allCategory:[]
}

const rootReducer = (state= initialState,{type, payload}) =>{
    
    switch (type) {
        case GET_ALL_FURNITURES:
        return {
            ...state,
            allFurnitures: payload,
            temporal: payload,
        };         
        
        default:
            return {...state}
    }
}

export default rootReducer;