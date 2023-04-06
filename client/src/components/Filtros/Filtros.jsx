import React from 'react';
import styles from "./Filtros.module.css";
import { useState } from 'react';
import {updateVideoGames,set_Prev_VideoGames,set_flag_PreVG,setFirstPage} from "../../redux/action"; 
import { useDispatch ,useSelector} from 'react-redux';
import { useRef } from 'react';


const Filtros = (props) => {
    const videogamesPrev= useSelector(state=>state.videoGames_Prev)
    const dispatch = useDispatch();
    const datafiltrada= useRef([]);

    // const [datosFiltrados,setdatosFiltrados]=useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(props.generos.length).fill(false)
    );


    const limpiaRepetidos=(videogames)=>{
        
          let videogamesMap = videogames.map(item=>{
              return [item.id,item]
          });
          var videogamesMapArr = new Map(videogamesMap); // Pares de clave y valor
          
          let unicos = [...videogamesMapArr.values()]; // Conversión a un array
        
          return unicos
    }
    const filtrado =(value,property) =>{
        if(value){
            const data = (props.flag) ? videogamesPrev : props.videogames
            const resulta2= data.filter(videogames =>{
                return videogames.create===false? videogames.genres.some(genre=> genre===property) 
                                                : videogames.genres.some(genre=> genre.nombre===property)
            })

            datafiltrada.current=([...datafiltrada.current,...resulta2]);
            datafiltrada.current=limpiaRepetidos(datafiltrada.current);
            dispatch(updateVideoGames(datafiltrada.current));
            dispatch(setFirstPage());
        }else{
            
            console.log("data filtra REF ", datafiltrada.current);

            const resulta2Prev= datafiltrada.current.filter(videogames =>{
                return videogames.create===false? videogames.genres.some(genre=> genre===property) 
                                                : videogames.genres.some(genre=> genre.nombre===property)
            })
            const resulta2= datafiltrada.current.filter(el => !resulta2Prev.includes(el));
            
            datafiltrada.current=([...resulta2]);           
            dispatch(updateVideoGames(datafiltrada.current));
            dispatch(setFirstPage());
        }
    } 
    const cleanFilterHandler=()=>{

        if (props.flag){

            dispatch(updateVideoGames(videogamesPrev));
            for (const property in checkedState) {
                console.log(`${property}: ${checkedState[property]}`);
                // setCheckedState({...checkedState,[property]:false})
              
                document.getElementById([property]).checked = false;
              }

            setCheckedState([])
            datafiltrada.current=[]
            dispatch(setFirstPage());
        }else {
            alert("NO hay filtros por Limpiar");
        }
    }
    const changeChkHandler=(event)=>{

        const property =event.target.name;
        const value= event.target.checked

        if(props.flag===false ) {
            dispatch(set_Prev_VideoGames(props.videogames))
            dispatch(set_flag_PreVG())
            // console.log("se disparo una vez");
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
        const result=sortByButton(property) 
        
        dispatch(updateVideoGames(result));
        dispatch(setFirstPage());
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