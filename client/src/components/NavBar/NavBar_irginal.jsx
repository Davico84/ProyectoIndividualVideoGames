import React from 'react'
import styles from "./NavBar.module.css"
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location= useLocation();
    
   
  return (
    
    <>      
        <div className={styles.main_NavBar_Menu1}>
          <Link to="/home"> 
          { location.pathname==="/home" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Home </div>
                                  :<div className={styles.main_menu_efecto_item}>Home </div>}           
          </Link> 
        </div> 
        <div className={styles.main_NavBar_Menu2}>
             <Link to="/create"> 
                 { location.pathname==="/create" 
                                    ? <div className={styles.main_NavBar_Menu_active}>Create </div>
                                    :<div className={styles.main_menu_efecto_item}>Create </div>}           
            </Link> 
        </div>
        <div className={styles.main_NavBar_Menu3}>
        <Link to="/contacto"> 
            { location.pathname==="/contacto" 
                                    ? <div className={styles.main_NavBar_Menu_active}>Contacto </div>
                                    :<div className={styles.main_menu_efecto_item}>Contacto </div>}           
            </Link> 
        </div>
        <div className={styles.main_NavBar_Menu4}> 
        <Link to="/acerca"> 
          { location.pathname==="/acerca" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Acerca </div>
                                  :<div className={styles.main_menu_efecto_item}>Acerca </div>}           
          </Link> 
        </div>

            <div className={styles.main_NavBar}/>
               <div className={styles.main_NavBar_icons}>
              <div className={styles.main_NavBar_icon1}></div>
              <div className={styles.main_NavBar_icon2}></div>
              <div className={styles.main_NavBar_icon3}></div>
            </div>

    </>
   
  )
}

export default NavBar