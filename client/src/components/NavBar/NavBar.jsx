import React from 'react'
import styles from "./NavBar.module.css"
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location= useLocation();
    
   
  return (
    
    <>      
        <div className={styles.main_NavBar}>
            <div className={styles.main_NavBar_icons}>
              <div className={styles.main_NavBar_icon1}/>
              <div className={styles.main_NavBar_icon2}/>
              <div className={styles.main_NavBar_icon3}/>

            </div>
            <div className={styles.main_NavBar_Menu}>
                <div className={styles.main_NavBar_Menu_Caja}>
                  <Link to="/home"> 
                   { location.pathname==="/home" 
                                          ? <div className={styles.main_NavBar_Menu_active}>Home </div>
                                          :<div className={styles.main_NavBar_Menu_Caja_item}>Home </div>}           
                  </Link> 
                </div>
                <div className={styles.main_NavBar_Menu_Caja}>
                  <Link to="/create"> 
                   { location.pathname==="/create" 
                                          ? <div className={styles.main_NavBar_Menu_active}>Form </div>
                                          :<div className={styles.main_NavBar_Menu_Caja_item}>Form</div>}           
                  </Link> 
                </div>
                <div className={styles.main_NavBar_Menu_Caja}>
                  <Link to="/acerca"> 
                   { location.pathname==="/acerca" 
                                          ? <div className={styles.main_NavBar_Menu_active}>About </div>
                                          :<div className={styles.main_NavBar_Menu_Caja_item}>About </div>}           
                  </Link> 
                </div>
                <div className={styles.main_NavBar_Menu_Caja}>
                  <Link to="/contacto"> 
                   { location.pathname==="/contacto" 
                                          ? <div className={styles.main_NavBar_Menu_active}>Contact </div>
                                          :<div className={styles.main_NavBar_Menu_Caja_item}>Contact</div>}           
                  </Link> 
                </div>

            </div>
       
        </div>
      

    </>
   
  )
}

export default NavBar