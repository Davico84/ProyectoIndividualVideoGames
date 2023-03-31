import { GET_VIDEOGAMES, SET_ERROR } from "./action";

const initialState={
    videoGames:[],
    videGame:[],
    pagina:1,
    porPagina:15,
    input:1,
    maximo:0,
    msgerror:"NULL",
    generos:[]
}

const rootReducer=(state =initialState, action) =>{
    
    switch (action.type) {
        case GET_VIDEOGAMES:{
            
            return {...state,videoGames:action.payload}
             }
        case SET_ERROR:
           
            return{...state, msgerror:action.payload}   
    
        default:
         
            return{...state}
    }

}
export default rootReducer;