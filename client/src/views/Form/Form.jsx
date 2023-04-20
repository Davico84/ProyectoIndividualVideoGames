import {useEffect} from 'react'
import  Pie from "../../components/Pie/Pie"
import { get_Genres} from '../../redux/action';
import styles from "./Form.module.css"
import {useState}from "react"
import { useDispatch,useSelector } from "react-redux";
import axios from "axios"



const Form = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    
    
    dispatch(get_Genres());

  }, [dispatch])

  const generos= useSelector(state=>state.genres)
  
  const [checkedState, setCheckedState] = useState(
                                          new Array(generos.length).fill(false));
  const [genre,setGenre]=useState("")
  const [errors,setErrors]= useState({ })
  const [activaGenre,setActivaGenre]=useState(false)
  const [activaBtnGenre,setActivaBtnGenre]=useState(false)
  const [form,setForm]= useState({
    nombre:"",
    image:"",
    rating:"",
    feclan:"2023-04-10",
    plataformas:"",
    descripcion:"",
    Arrgenrs:[]
  })

  const changeFormHandler=(event)=>{
    const property =event.target.name;
    const value= event.target.value

    setForm({...form,[property]:value})
    setErrors(validate({...form,[property]:value}))
}

const changeChkHandler=(event)=>{
  const property =event.target.name;
  const value= event.target.checked
  setCheckedState({...checkedState,[property]:value})
}
const addGenreChkHandler=(event)=>{
  const value= event.target.checked
  setActivaGenre(value)
  if(activaGenre) {setGenre("")
  // console.log("es hora de klimpiar");  
  }

}
const addGenreHandler=(event)=>{
  
  const value= event.target.value
  setGenre(value)
  setErrors(validateGenre(value))
  
 }
 const submitGenrebtnHandler=()=>{
  // console.log("loq envia genre", genre);
  axios.post("http://localhost:3001/genres/",{genre})
    .then(res=>{
              alert("El registro fue Añadido")
              setGenre("")
              dispatch(get_Genres());
      })
    .catch(err=>{
      if (err.request.response==="") alert("Error General: "+err.message)
      else alert("Error Capturado en Servidor: "+err.response.data.error)
    })
 }

const cancelarHandler= (event)=>{
  window.location.replace('');
}
const submitHandler =(event)=>{
   /**
    NOTA:
    solo se usa dispatch cuando voy a realizar un cambio en el estado global , sino es asi puedes 
    hacer directamente una peticion al servidor.
    */
    event.preventDefault();
    pushearGenero(checkedState)

    // event.target.reset()
    // limpiarForm()
    // limpiarEstados()
    
    axios.post("http://localhost:3001/videogames/",form)
    .then(res=>{
              alert("El registro fue Añadido")
              window.location.replace('')
      })
    .catch(err=>{
      if (err.request.response==="") alert("Error General: "+err.message)
      else alert("Error Capturado en Servidor: "+err.response.data.error)
    })
}

const pushearGenero=(state)=>{
  let arreglo=[]
  
  for (const property in state) {
    
    if  (state[property]=== true){
      arreglo.push(property);
    }   
  }
 form.Arrgenrs=arreglo
  
}
// const limpiarForm=()=>{

//   for (const property in form) {
//     form[property]=""
//   }

// }
// const limpiarEstados=()=>{
 
//   for (const property in checkedState) {

//     checkedState[property]=false
//     }
// }

const validateGenre=(value)=>{
  let errors={}
  const result=generos.find(el=>  el.nombre.toUpperCase() === value.toUpperCase())
  if (value.length<=3){
      errors.genero="Nombre demasiado Corto"
  }else if(typeof result!== "undefined") errors.genero="El genero ya se encuentra registrado"
  
  // console.log("errors",errors.genero);
  if(!errors.genero) setActivaBtnGenre(true)
  return errors
}            

const validate=(form)=>{
  
  let errors={}
  if(!form.nombre) {
       errors.nombre=`Nombre es campo requerido`;
      }
  // else if (/^[0-9a-zA-Z]+$/.test(form.nombre)) {
  //      errors.nombre = 'Nombre No Valido';
  //    }
  else if (form.nombre.length<=2 || form.nombre.length>255){
       errors.nombre = 'Nombre Muy corto/muy Largo';
     }

  if(!form.image) 
     errors.image=`Imagen es campo requerido`;
    else if (form.image.length<=15 || form.image.length>255){
     errors.image = 'Link de Imagen Muy corto/muy Largo';
   }
   if(!form.rating) 
    errors.rating=`Rating es campo requerido`;
    else if(!/^[0-7]+([.])?([0-9]+)?$/.test(form.rating)){
      errors.rating = 'Rating solo acepta numeros de 0-7';     
     }
    
    else if (form.rating<=0 || form.rating>7){
     errors.rating = 'Rating fuera de Intervalo de 0-7';
    }
  return errors
}

return (
    <>
      
      <div className={styles.main}>
      <div className={styles.main_fondo_menu}/>
      <div className={styles.main_titulo_caja}>
            <div className={styles.main_titulo_texto}>Formulario de Creación</div>
            <div className={styles.main_titulo_texto2}>Todos los campos son requeridos</div>
      </div>
      <div className={styles.main_fondo}>
        <div className={styles.main_form}/>
        
          <form onSubmit={submitHandler}>
            <div className={styles.main_form_caja_txt_nombre}>
                  <input type="text" placeholder='Nombre' className={styles.main_form__txt} 
                    id="txtnom" 
                    value={form.nombre}
                    onChange={changeFormHandler} 
                    name="nombre"
                    // maxLength="255"
                    required
                  /> 
                  {errors.nombre &&  (<span className={styles.main_form_label_error}> {errors.nombre} </span>)}
                  
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_imagen}>
                  <input type="url" placeholder='https://example.com' className={styles.main_form__txt} 
                    id="txtimage" 
                    value={form.image}
                    onChange={changeFormHandler} 
                    name="image"
                    pattern="https://.*" size="30"
                    required
                  /> 

                {errors.image && <span className={styles.main_form_label_error}> {errors.image} </span>}
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_rating}>
                  {/* <input type="number" placeholder='1.0' className={styles.main_form__txt}  */}
                  <input type="text" placeholder='1.0' className={styles.main_form__txt} 
                    id="txtrating"
                    // min="0" max ="7"  
                    step="0.1"
                    value={form.rating}
                    onChange={changeFormHandler} 
                    name="rating"
                    required
                  /> 
                {errors.rating && <span className={styles.main_form_label_error}> {errors.rating} </span>}
                  <div className={styles.main_form_txt_linea}/>

            </div>
            <div className={styles.main_form_caja_txt_feclanz}>
                  <input type="date" placeholder='Fecha Lanzamiento' className={styles.main_form__txt} 
                      id="txtfeclan"
                      value={form.feclan}
                      onChange={changeFormHandler} 
                      name="feclan"
                      min="2023-04-10" max="2025-12-31"
                      required
                  /> 
                  {/* <span className={styles.main_form_label_error}>fec lanz</span> */}
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_plataformas}>
                  <input type="text" placeholder='Plataformas' className={styles.main_form__txt} 
                       id="txtplataformas" 
                       value={form.plataformas}
                       onChange={changeFormHandler} 
                       name="plataformas"
                       maxLength="255"
                       required
                  /> 
                  {errors.plataformas && <span className={styles.main_form_label_error}> {errors.plataformas} </span>}
                  <div className={styles.main_form_txt_linea}/>
            </div>
            <div className={styles.main_form_caja_txt_descipcion}>
                  {/* <input type="text" placeholder='Descripcion' className={styles.main_form__txt} />  */}
                  <input type="text" className={styles.main_form__txt_multiline} 
                                          value={form.descripcion}
                                          onChange={changeFormHandler} 
                                          name="descripcion"
                                          rows={20}
                                          cols={40}
                                          placeholder="Descripcion"
                                          maxLength="3000"
                                          required
                  />    
                  {errors.descripcion && <span className={styles.main_form_label_error}> {errors.descripcion} </span>}
                  <div className={styles.main_form_txt_linea}/>
            </div>
            
            <div className={styles.main_form_caja_opt_generos}>
                
              <div  className={styles.mainchks}>
                      <div className={styles.mainchks_opt}>
                          {generos.map(( el,index) =>
                          {   return <div key={index} className={styles.div_options}>
                                        <input 
                                            onChange={changeChkHandler} 
                                            className={styles.chkbox} 
                                            key={el.nombre} 
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
                  <div className={styles.div_agre_genre}>
                            <div className={styles.div_chk_add}>
                              <input 
                                            onChange={addGenreChkHandler} 
                                            className={styles.chkbox} 
                                            
                                            type="checkbox" 
                                            // checked={false}
                                            id="chkAgregar"
                                            name="chkAgregar" 
                                            value ="chkAgregar"  
                               />  
                              <label htmlFor="chkAgregar" >Agregar genero</  label>

                            </div>
                              <input tipe="text" 
                                         placeholder='Ingrese genero' 
                                              hidden={!activaGenre}
                                            onChange={addGenreHandler}
                                            value={genre}
                                               
                              />
                              <input type='button' 
                                              className={styles.boton}
                                              hidden={!activaGenre} 
                                              disabled={!activaBtnGenre}
                                              value="Añadir Genero"
                                              onClick={submitGenrebtnHandler}/>
                            {errors.genero && <span className={styles.main_form_label_error}> {errors.genero} </span>}
                                                                    
                  </div> 
                    <div className={styles.main_form_txt_linea}/>
            </div>
                     
              <button className={styles.ov_btn_slide_right} type="submit">Crear VideoJuego</button>
              
            </form>
                    
            <div className={styles.main_pie_form}>
                   <div className={styles.main_pie_form_contenedor}>
                      <button className={styles.ov_btn_slide_boton2} type="button"
                             onClick={cancelarHandler}>Cancelar
                      </button>
                       
                       
                   </div>
           </div>


        </div>

      

      </div>
    <Pie/>
    </>
  )
}

export default Form