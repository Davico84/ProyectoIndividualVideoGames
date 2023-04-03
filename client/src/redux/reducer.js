import { GET_VIDEOGAMES, SET_ERROR,SET_NEXT_PAGE ,SET_PREV_PAGE,SET_FIRST_PAGE,
         SET_LAST_PAGE,SET_MAX_PAGE ,UPDATE_VIDEOGAMES, GET_GENRES} from "./action";

const initialState={
    videoGames:[],
    // videoGames_Prev:[],
    videGame:[],
    pagina:1,
    porPagina:15,
    input:1,
    maximo:0,
    msgerror:"NULL",
    genres:[]
}

const rootReducer=(state =initialState, action) =>{
    
    switch (action.type) {
        case GET_VIDEOGAMES:{
            return {...state,videoGames:action.payload}}
        case GET_GENRES:{
            return {...state,genres:action.payload}}
        case SET_ERROR:
            return{...state, msgerror:action.payload}
        case SET_NEXT_PAGE:
            return{...state,pagina:state.pagina+1}
        case SET_PREV_PAGE:
            return{...state,pagina:state.pagina-1}
        case SET_FIRST_PAGE:
            return{...state,pagina:1}
        case SET_LAST_PAGE:
            return{...state,pagina:state.maximo}
        case SET_MAX_PAGE:
            return{...state,maximo:action.payload}   
        case UPDATE_VIDEOGAMES:
            return {...state,videoGames:action.payload}
        // case PREV_VIDEOGAMES:
        //     return {...state,videoGames_Prev:action.payload}    
        default:
         
        return{...state}
    }

}
export default rootReducer;