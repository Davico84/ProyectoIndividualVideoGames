

import {useEffect} from "react"
import { get_VideoGames } from '../../redux/action';
import { useDispatch,useSelector } from "react-redux";

import CardContainer from "../../components/CardContainer/CardContainer"
import Paginado from "../../components/Paginado/Paginado"

import Pie from "../../components/Pie/Pie"
import styles from "./Home.module.css"
const Home = () => {
  
  const disptach = useDispatch();
  useEffect(() => {
    
    disptach(get_VideoGames())

  }, [disptach])
  
  const error=useSelector(state=>state.msgerror)
  const videogames= useSelector(state=>state.videoGames)
  const pagina= useSelector(state=>state.pagina)
  const porPagina= useSelector(state=>state.porPagina)
  const maximo=Math.ceil(videogames.length/porPagina) 


  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_fondo}/>
        <div className={styles.main_titulo}/>
        <div className={styles.main_titulo_texto}>Listado General</div>
        <div className={styles.main_titulo_texto2}> Vista resumida de todos los juegos en grupos de 15 por pagina.</div>
        <div className={styles.cuerpo_filtros}>
            <div className={styles.cuerpo_filtros_titulo}>Filtros</div>
            <div className={styles.cuerpo_filtros_titulo_icono}/>
          <div className={styles.cuerpo_filtros_contenedor}>
            <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Género:</div>
                {/* <input type="checkbox" id="1" name="chk1" onChange={changeChkHandler} checked={chkdietas.chk1} value="Ketogenic" />Ketogenic */}
               <div  className={styles.mainchks}>
                  <div className={styles.mainchks_opt}>
                    <input className={styles.chkbox} type="checkbox" id="1" name="chk2" value="Gluten_Free" />
                    <input className={styles.chkbox} type="checkbox" id="2" name="chk3" value="Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="3" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="4" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="5" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="6" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="7" name="chk2" value="Gluten_Free" />
                    <input className={styles.chkbox} type="checkbox" id="8" name="chk3" value="Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="9" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="10" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="11" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="12" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="13" name="chk2" value="Gluten_Free" />
                    <input className={styles.chkbox} type="checkbox" id="14" name="chk3" value="Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="15" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="16" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="17" name="chk4" value="Lacto-Vegetarian" />
                    <input className={styles.chkbox} type="checkbox" id="18" name="chk5" value="Ovo-Vegetarian" />
                    <input className={styles.chkbox}type="checkbox" id="19" name="chk2" value="Gluten_Free" />
                    <input className={styles.chkbox} type="checkbox" id="20" name="chk3" value="Vegetarian" />

                  </div>
                  <div className={styles.mainchks_text}>
                    <label name="action"> Action</label>
                    <label name="action"> Adventure</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> Action</label>
                    <label name="action"> Adventure</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> Action</label>
                    <label name="action"> Adventure</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> RPG</label>
                    <label name="action"> Horror</label>
                    <label name="action"> Action</label>
                    <label name="action"> Adventure</label>
                    
                  </div>
               </div>
            
            <div className={styles.cuerpo_filtros_Subtitulos}>Filtrar por Origen: </div>
              <select className={styles.select_css} title="Origen">
                  <option defaultValue>API</option>
                  <option value="BD">Base de Datos</option>
                 
              </select>
            
          </div>
        </div>
        <div className={styles.cuerpo_tarjetas}>
           <CardContainer videogames={videogames} porPagina={porPagina} pagina={pagina} error={error} />
        </div>
        <div className={styles.cuerpo_ordenamiento}>
        <select className={styles.select_css} title="Ordenamiento">
                <option defaultValue>Ordenamiento</option>
                <option value="1">Alfabetico Ascendente</option>
                <option value="2">Alfabetico Descendente</option>
                <option value="3">Rating   Ascendente</option>
                <option value="4">Rating   Descendente</option>
            </select>
        </div>
        <div className={styles.cuerpo_navegacion}>
            <Paginado pagina={pagina} maximo={maximo} videogames={videogames}/>
        </div>
        
      

      </div>
      <Pie/>
    </>
   

  )
}

export default Home