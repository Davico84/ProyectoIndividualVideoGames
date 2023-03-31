export const GET_VIDEOGAMES="GET_VIDEOGAMES";
export const SET_ERROR="SET_ERROR";
export const SET_NEXT_PAGE="SET_NEXT_PAGE";
export const SET_PREV_PAGE="SET_PREV_PAGE";
export const SET_FIRST_PAGE="SET_FIRST_PAGE";
export const SET_LAST_PAGE="SET_LAST_PAGE";
export const SET_MAX_PAGE="SET_MAX_PAGE";



let estado=0
export const get_VideoGames = () => {
    return async dispatch=>{
        return fetch("http://localhost:3001/videogames")
            .then(response =>{
                
                estado= response.status
                return response.json()
            })
            .then(json =>{
                if(estado ===400){
                    dispatch({ type: SET_ERROR,
                            payload: json

                    })
                }else{
                    dispatch({ type : GET_VIDEOGAMES,
                            payload : json
                    })
                }
            }).catch(error =>{
                dispatch({ type: SET_ERROR,
                        payload: error.message

                })
            })
    }
}
export const setNextPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_NEXT_PAGE})
    }
}
export const setPrevPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_PREV_PAGE})
    }
}
export const setFirstPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_FIRST_PAGE})
    }
}
export const setLastPage=()=>{
    return  function(dispatch){
           dispatch({type: SET_LAST_PAGE})
    }
}
export const setMaxPage=(maximo)=>{
    
    return  function(dispatch){
           dispatch({type: SET_MAX_PAGE,payload:maximo})
    }
}