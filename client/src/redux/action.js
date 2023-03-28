export const GET_VIDEOGAMES="GET_VIDEOGAMES";
export const SET_ERROR="SET_ERROR"


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
 