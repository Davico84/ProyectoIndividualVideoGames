import React from 'react';
import styles from "./Filtros.module.css";
import { useState } from 'react';
import {updateVideoGames,setNextPage,setPrevPage,set_Prev_VideoGames,set_flag_PreVG,setFirstPage} from "../../redux/action"; 
import { useDispatch ,useSelector} from 'react-redux';


const Filtros = (props) => {
    const videogamesPrev= useSelector(state=>state.videoGames_Prev)
    const dispatch = useDispatch();

    const [datosFiltrados,setdatosFiltrados]=useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(props.generos.length).fill(false)
    );
    const filtrado =(value,property) =>{
        if(value){
            console.log("FLAG:", props.flag);
            const data = (props.flag) ? videogamesPrev : props.videogames
            const resulta2= data.filter(videogames =>{
                return videogames.create===false? videogames.genres.some(genre=> genre===property) 
                                                : videogames.genres.some(genre=> genre.nombre===property)
            })
            setdatosFiltrados([...datosFiltrados, ...resulta2])  
            console.log("REsultados del filtro", resulta2);
            dispatch(updateVideoGames(resulta2));
            dispatch(setNextPage());
            dispatch(setPrevPage());          
            // console.log("filtro SOME",resulta2);  
        }else{
            const resulta2= datosFiltrados.filter(videogames =>{
                return videogames.create===false? videogames.genres.some(genre=> genre!==property) 
                                                : videogames.genres.some(genre=> genre.nombre!==property)
            })
            setdatosFiltrados([...resulta2])
            // console.log("datosFiltrados FALSE",resulta2); 

            dispatch(updateVideoGames(resulta2));
            dispatch(setNextPage());
            dispatch(setPrevPage()); 
        }
    } 
    const cleanFilterHandler=()=>{

        if (props.flag){
            dispatch(updateVideoGames(videogamesPrev));
            dispatch(setNextPage());
            dispatch(setPrevPage()); 
        }else 
        alert("NO hay filtros por Limpiar");
            
    }
    const changeChkHandler=(event)=>{

        const property =event.target.name;
        const value= event.target.checked

        if(props.flag===false ) {
            dispatch(set_Prev_VideoGames(props.videogames))
            dispatch(set_flag_PreVG())
            console.log("se disparo una vez");
        }

        if (property!=="chk_activador") {
            setCheckedState({...checkedState,[property]:value})
        }
        setCheckedState({...checkedState,[property]:value})
        filtrado(value, property)

    }

    const sortByButton=(property)=>{
        
        let result=[]
        const data = (props.flag) ? videogamesPrev : props.videogames
        switch (property) {
            case "API":
                result = data.filter((el=> el.create===false));
                break;
            case "BD":
                result = data.filter((el=> el.create===true));
                break;
            case "DEF":
                result= videogamesPrev
                break;
            default:
                console.log("entre defaut");
                break;
        }
        console.log("filtro SORUCE", result);
        return result;
    }

    const sourceHandler=(event)=>{
        if(props.flag===false ) {
            dispatch(set_Prev_VideoGames(props.videogames))
            dispatch(set_flag_PreVG())
            console.log("se disparo una vez");
        }
        const property =event.target.value;
        // setprev_videogames({...prev_videogames,prev_videoG: props.videogames })
        // //if(property!=="optDef")  
        
        const result=sortByButton(property) 
        
        // console.log(`result ordenado x ${property}`,result)
        dispatch(updateVideoGames(result));
        dispatch(setFirstPage());
        // dispatch(setPrevPage());
    }


    return (

        <div className={styles.main}>       
            <div className={styles.cuerpo_filtros_titulo}>Filtros</div>
                <div className={styles.cuerpo_filtros_titulo_icono}/>
            <div className={styles.cuerpo_filtros_contenedor}>
                <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Género:</div> 
                <div className={styles.chk_activador}>
                    <input  type="button" 
                            title="Limpiar Filtros" 
                            onClick={cleanFilterHandler} 
                            className={styles.boton_3d} 
                            value="Limpiar Filtros"
                    /> 
                </div>
                    
                <div  className={styles.mainchks}>
                    <div className={styles.mainchks_opt}>
                        {props.generos.map(( el,index) =>
                        {   return <input 
                                        onClick={changeChkHandler} 
                                        className={styles.chkbox} 
                                        key={index} 
                                        type="checkbox" 
                                        checked={checkedState[index]} 
                                        id={el.nombre} 
                                        name={el.nombre} 
                                        value ={el.nombre} 
                                    />  
                        } )}
                    </div>
                    <div className={styles.mainchks_text}>
                    {props.generos.map(( el,index) =>
                        {   return  <label key={index} htmlFor={el.nombre} >{el.nombre}</  label>            
                        } )}
                    </div>
                </div>
                
                <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Origen: </div>
                <select className={styles.select_css} title="Origen">
                    <option onClick={sourceHandler} value="DEF" defaultValue>Por Defecto</option>
                    <option onClick={sourceHandler} value="API">API</option>
                    <option onClick={sourceHandler} value="BD">Base de Datos</option>
                    
                </select>
                
            </div>
        
        </div>
    )
    }

export default Filtros