import React from 'react'
import styles from "./NavBar.module.css"
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location= useLocation();
    
   
  return (
    <div className={styles.main_NavBar}>
        
        <div className={styles.main_NavBar_Menu1}>
          <Link to="/home"> 
          { location.pathname==="/home" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Home </div>
                                  :<div className={styles.main_NavBar_Menu1_item}>Home </div>}           
          </Link> 
        </div>
        <div className={styles.main_NavBar_Menu2}>
          <Link to="/create"> 
          { location.pathname==="/create" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Create </div>
                                  :<div className={styles.main_NavBar_Menu2_item}>Create </div>}           
          </Link> 
        </div>
        
        <div className={styles.main_NavBar_Menu3}>
          <Link to="/contacto"> 
          { location.pathname==="/contacto" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Contacto </div>
                                  :<div className={styles.main_NavBar_Menu3_item}>Contacto </div>}           
          </Link> 
        </div>
        <div className={styles.main_NavBar_Menu4}>
          <Link to="/acerca"> 
          { location.pathname==="/acerca" 
                                  ? <div className={styles.main_NavBar_Menu_active}>Acerca </div>
                                  :<div className={styles.main_NavBar_Menu4_item}>Acerca </div>}           
          </Link> 
        </div>
        {/* <Link to="/Acerca"><div className={styles.main_NavBar_Menu4}>Acerca de</div></Link> */}
       
    </div>
  )
}

export default NavBar