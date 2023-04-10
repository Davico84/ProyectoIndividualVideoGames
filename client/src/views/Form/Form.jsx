import {useEffect} from 'react'
import  Pie from "../../components/Pie/Pie"
import { get_Genres } from '../../redux/action';
import styles from "./Form.module.css"
import {useState}from "react"
import { useDispatch,useSelector } from "react-redux";

const Form = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    // console.log("se volvio a cargar Home");
    
    dispatch(get_Genres());

  }, [dispatch])



  const generos= useSelector(state=>state.genres)
  

  const [form,setForm]= useState({
    nombre:"",
    image:"",
    rating:"",
    feclan:"2023-04-10",
    plataformas:"",
    descripcion:"",
    TiposdeDieta:[]
  })
  const [errors,setErrors]= useState({
    nombre:"",
    image:"",
    rating:"",
    feclan:"2023-04-10",
    plataformas:"",
    descripcion:"",
    TiposdeDieta:[]
  })
  const [checkedState, setCheckedState] = useState(
    new Array(generos.length).fill(false)
);
  const changeHandler=(event)=>{
    const property =event.target.name;
    const value= event.target.value
    validate({...form,[property]:value})
    setForm({...form,[property]:value})
}
  const submitHandler =(event)=>{
    // if(form.nombre ==="" ||form.resumen ==="" ) return alert("debe registrar un nombre y resumen valido para continuar")
    // form.TiposdeDieta=llenarDietas()
    // event.preventDefault();
    // // console.log("que manda form", form)
    // axios.post("http://localhost:3001/recipes/",form)
    // .then(res=>{
    //     alert("El registro fue Añadido")
    //     limpiarForm(form)})
    // .catch(err=>alert("Error:",err))
}
const changeChkHandler=(event)=>{

  const property =event.target.name;
  const value= event.target.checked

  // if(props.flag===false ) {
  //     dispatch(set_Prev_VideoGames(props.videogames))
  //     dispatch(set_flag_PreVG())
  //     // console.log("se disparo una vez");
  // }

  setCheckedState({...checkedState,[property]:value})
  // filtrado(value, property)

}
  const validate=(form)=>{
    // if(form.nombre.length<=3){
    //     setErrors({...errors,nombre:`Campo "Nombre" Requerido`})
    // }
    // else
    //     setErrors({...errors,nombre:""})

    // if(form.resumen.length<=3){
    //     setErrors({...errors,resumen:`Campo "Resumen" Requerido`})
    //     }
    // else
    //     setErrors({...errors,resumen:""})
  }  


  return (
    <>
      
      <div className={styles.main}>
      <div className={styles.main_fondo_menu}/>
      <div className={styles.main_titulo_caja}>
            <div className={styles.main_titulo_texto}>Listado General</div>
            <div className={styles.main_titulo_texto2}> Vista resumida de todos los juegos en grupos de 15 por pagina.</div>
      </div>
      <div className={styles.main_fondo}>
        <div className={styles.main_form}/>
        
          <form onSubmit={submitHandler}>
            <div className={styles.main_form_caja_txt_nombre}>
                  <input type="text" placeholder='Nombre' className={styles.main_form__txt} 
                    id="txtnom" 
                    value={form.nombre}
                    onChange={changeHandler} 
                    name="nombre"
                  /> 
                  <span className={styles.main_form_label_error}>nombre</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_imagen}>
                  <input type="text" placeholder='Imagen' className={styles.main_form__txt} 
                    id="txtimage" 
                    value={form.image}
                    onChange={changeHandler} 
                    name="image"
                  /> 
                  <span className={styles.main_form_label_error}>imagen</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_rating}>
                  <input type="number" placeholder='Rating' className={styles.main_form__txt} 
                    id="txtrating" min="0" max ="7" 
                    value={form.rating}
                    onChange={changeHandler} 
                    name="rating"
                  /> 
                  <span className={styles.main_form_label_error}>rating</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_feclanz}>
                  <input type="date" placeholder='Fecha Lanzamiento' className={styles.main_form__txt} 
                      id="txtfeclan"
                      value={form.feclan}
                      onChange={changeHandler} 
                      name="feclan"
                      min="2023-04-10" max="2025-12-31"
                  /> 
                  <span className={styles.main_form_label_error}>fec lanz</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_plataformas}>
                  <input type="text" placeholder='Plataformas' className={styles.main_form__txt} 
                       id="txtplataformas" 
                       value={form.plataformas}
                       onChange={changeHandler} 
                       name="plataformas"
                  /> 
                  <span className={styles.main_form_label_error}>plataformas</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_descipcion}>
                  {/* <input type="text" placeholder='Descripcion' className={styles.main_form__txt} />  */}
                  <textarea className={styles.main_form__txt_area} 
                                          // value={form.pasoAPaso}
                                          value={form.descripcion}
                                          onChange={changeHandler} 
                                        name="descripcion"
                                        rows={20}
                                        cols={40}
                                        placeholder="Descripcion"
                                        />    
                  <span className={styles.main_form_label_error}>descripcion</span>
                  <div className={styles.main_form_txt_linea}/>
            </div>
            
            <div className={styles.main_form_caja_opt_generos}>
              <div  className={styles.mainchks}>
                      <div className={styles.mainchks_opt}>
                          {generos.map(( el,index) =>
                          {   return <div className={styles.div_options}>
                                        <input 
                                            onClick={changeChkHandler} 
                                            className={styles.chkbox} 
                                            key={index} 
                                            type="checkbox" 
                                            checked={checkedState[index]} 
                                            id={el.nombre} 
                                            name={el.nombre} 
                                            value ={el.nombre} 
                                        />  
                                        <label key={index} htmlFor={el.nombre} >{el.nombre}</  label>
                          
                                        </div>
                          } )}
                      </div>
                  </div>
                    <div className={styles.main_form_txt_linea}/>
            </div>
            
            {/* <div className={styles.main_caja_boton_env}> */}
              <button className={styles.main_caja_boton_env} type="submit">Crear VideoJuego</button>
          
            </form>

            <div className={styles.main_pie_form}>
                   
                   <div className={styles.main_pie_form_contenedor}>
                       
                       <input className={styles.main_pie_form_caja_boton} 
                       type="button" value="Cancelar"
                       />
                       
                   </div>
           </div>


        </div>

      

      </div>
    <Pie/>
    </>
  )
}

export default Form