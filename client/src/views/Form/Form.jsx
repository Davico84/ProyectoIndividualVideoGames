import React from 'react'
import  Pie from "../../components/Pie/Pie"
import styles from "./Form.module.css"
const Form = () => {
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
        <div className={styles.main_form_caja_txt_nombre}>
              <input type="text" placeholder='Nombre' className={styles.main_form__txt} /> 
              <span className={styles.main_form_label_error}>imagen</span>
              <div className={styles.main_form_txt_linea}/>
        </div>
        <div className={styles.main_form_caja_txt_imagen}>
              <input type="text" placeholder='Imagen' className={styles.main_form__txt} /> 
              <span className={styles.main_form_label_error}>imagen</span>
              <div className={styles.main_form_txt_linea}/>
        </div>
        <div className={styles.main_form_caja_txt_rating}>
              <input type="number" placeholder='Rating' className={styles.main_form__txt} 
              id="rating" min="0" max ="7" /> 
              <span className={styles.main_form_label_error}>rating</span>
              <div className={styles.main_form_txt_linea}/>
        </div>
        <div className={styles.main_form_caja_txt_feclanz}>
              <input type="text" placeholder='Fecha Lanzamiento' className={styles.main_form__txt} /> 
              <span className={styles.main_form_label_error}>fec lanz</span>
              <div className={styles.main_form_txt_linea}/>
        </div>
        <div className={styles.main_form_caja_txt_plataformas}>
              <input type="text" placeholder='Plataformas' className={styles.main_form__txt} /> 
              <span className={styles.main_form_label_error}>plataformas</span>
              <div className={styles.main_form_txt_linea}/>
        </div>
        <div className={styles.main_form_caja_txt_descipcion}>
              <input type="text" placeholder='Descripcion' className={styles.main_form__txt} /> 
              <span className={styles.main_form_label_error}>descripcion</span>
              <div className={styles.main_form_txt_linea}/>
        </div>

      </div>


      

      </div>
    <Pie/>
    </>
  )
}

export default Form