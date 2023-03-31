import React,{useDispatch} from 'react-redux';

import styles from "./Paginado.module.css"
import { setNextPage,setPrevPage,setFirstPage,setLastPage,setMaxPage} from "../../redux/action"; 
// import { useState } from 'react';

const Paginado = (props) => {
  const dispatch = useDispatch();

  const NextPage=()=>{
    if(props.maximo===props.pagina)return
      dispatch(setNextPage())
  }
  const PrevPage=()=>{
      if(props.pagina===1) return
      dispatch(setPrevPage())
  }
  const FirstPage=()=>{
      dispatch(setFirstPage())
  }
  const LastPage=()=>{
      set_MaxPage();
      dispatch(setLastPage())
  }
  const set_MaxPage=() =>{
      dispatch(setMaxPage(props.maximo))
  }



  return (
    <>
            {/* <input type="button" onClick={FirstPage} value="First"/>  
            <button onClick={PrevPage}> Prev </button>
            <label>{props.pagina}</label> <p>de {props.maximo}</p> 
            <button onClick={NextPage}>Next</button>
            <button onClick={LastPage}>Last</button> */}
            <div className={styles.cuerpo_navegacion_botones}>
              <input className={styles.boton_first} onClick={FirstPage} type="button" title="First"/>
              <input className={styles.boton_prev} onClick={PrevPage} type="button" title="Prev"/>  
              <label className={styles.caja}> {props.pagina}</label> 
                <p className={styles.caja2}>de </p> 
              <label className={styles.caja}>{props.maximo}</label>
              <input className={styles.boton_next} onClick={NextPage} type="button" title="Next"/>  
              <input className={styles.boton_last} onClick={LastPage} type="button" title="Last"/>  
            </div>
    </>
  )
}

export default Paginado