import { GET_VIDEOGAMES, SET_ERROR,SET_NEXT_PAGE ,SET_PREV_PAGE,SET_FIRST_PAGE,
         SET_LAST_PAGE,SET_MAX_PAGE ,UPDATE_VIDEOGAMES, GET_GENRES,SET_PREV_VIDEOGAMES,
         GET_VIDEOGAME_BY_ID,ACTIVE_FLAG_PREV,DESTROY_VIDEOGAME,SET_VIDEOGAME,
        //  SET_GENRE
        } from "./action";

const initialState={
    videoGames:[],
    videoGames_Prev:[],
    flag_prev:false,
    videoGame:[],
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
        case GET_VIDEOGAME_BY_ID:{
            // console.log("esto entro a payload",action.payload)
            return {...state,videoGame:action.payload}}
        case SET_VIDEOGAME:{
            return {msg:"El Registro Fue Añadido Correctamente"}
        }
        // case SET_GENRE:{
        //     return {msg:"El Registro Fue Añadido Correctamente"}
        // }
        case DESTROY_VIDEOGAME:{
               console.log("entre al destroy?");
            return {...state,videoGame:action.payload}}
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
        case SET_PREV_VIDEOGAMES:
            return {...state,videoGames_Prev:action.payload}    
        case ACTIVE_FLAG_PREV:
            return {...state,flag_prev:true}  
        default:
         
        return{...state}
    }

}
export default rootReducer;