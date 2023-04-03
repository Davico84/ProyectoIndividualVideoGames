import React from 'react'
import styles from "./Filtros.module.css"
import { useState } from 'react'

const Filtros = (props) => {

    const changeChkHandler=(event)=>{

        const property =event.target.name;
        const value= event.target.checked
        setchkgenres({...chkgenres,[property]:value})
        // setCheckedState({...checkedState,[property]:value})
    }
    
    // const arreglochk=  props.generos.map( el =>  {return {[el.nombre]: "false"}}  )
    // const [chkgenres,setchkgenres]= useState(arreglochk)

    const [checkedState, setCheckedState] = useState(
        new Array(props.generos.length).fill(false)
    );

    return (

        <div className={styles.main}>       
            <div className={styles.cuerpo_filtros_titulo}>Filtros</div>
                <div className={styles.cuerpo_filtros_titulo_icono}/>
            <div className={styles.cuerpo_filtros_contenedor}>
                <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Género:</div>
                    {/* <input type="checkbox" id="1" name="chk1" onChange={changeChkHandler} checked={chkdietas.chk1} value="Ketogenic" />Ketogenic */}
                <div  className={styles.mainchks}>
                    <div className={styles.mainchks_opt}>
                        {props.generos.map(( el,index) =>
                        {   return <input 
                                        onClick={changeChkHandler} 
                                        className={styles.chkbox} 
                                        key={index} 
                                        type="checkbox" 
                                        checked={chkgenres[index]} 
                                        id={index} 
                                        name={el.nombre} 
                                        value ={el.nombre} />  
                        } )}
                    </div>
                    <div className={styles.mainchks_text}>
                    {props.generos.map(( el,index) =>
                        {   return  <span key={index}>{el.nombre}</ span>            
                        } )}
                    </div>
                </div>
                
                <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Origen: </div>
                <select className={styles.select_css} title="Origen">
                    <option defaultValue>API</option>
                    <option value="BD">Base de Datos</option>
                    
                </select>
                
            </div>
        
        </div>
    )
    }

export default Filtros