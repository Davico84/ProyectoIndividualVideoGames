

import {useEffect} from "react"
import { get_VideoGames,get_Genres } from '../../redux/action';
import { useDispatch,useSelector } from "react-redux";

import CardContainer from "../../components/CardContainer/CardContainer"
import Paginado from "../../components/Paginado/Paginado"
import Ordenamiento from "../../components/Ordenamiento/Ordenamiento";
import Filtros from "../../components/Filtros/Filtros";
import Pie from "../../components/Pie/Pie"
import styles from "./Home.module.css"


const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("se volvio a cargar Home");
    dispatch(get_VideoGames())
    dispatch(get_Genres());

  }, [dispatch])
  
  const error=useSelector(state=>state.msgerror)
  const videogames= useSelector(state=>state.videoGames)
  const pagina= useSelector(state=>state.pagina)
  const porPagina= useSelector(state=>state.porPagina)
  const maximo=Math.ceil(videogames.length/porPagina) 
  const generos= useSelector(state=>state.genres)

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_fondo}/>
        <div className={styles.main_titulo_caja}>
          <div className={styles.main_titulo_texto}>Listado General</div>
          <div className={styles.main_titulo_texto2}> Vista resumida de todos los juegos en grupos de 15 por pagina.</div>

        </div>
        <div className={styles.cuerpo_filtros}>
           <Filtros generos={generos} videogames={videogames}/>
        </div>
        <div className={styles.cuerpo_tarjetas}>
           <CardContainer videogames={videogames} porPagina={porPagina} pagina={pagina} error={error} />
        </div>
        <div className={styles.cuerpo_ordenamiento}>
            <Ordenamiento videogames={videogames}/>
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