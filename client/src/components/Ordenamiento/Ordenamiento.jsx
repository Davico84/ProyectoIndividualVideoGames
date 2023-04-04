import React from 'react'
import styles from "./Ordenamiento.module.css"
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import {updateVideoGames,setNextPage,setPrevPage} from "../../redux/action"; 

const Ordenamiento = (props) => {
    const dispatch = useDispatch();

    // const [prev_videogames,setprev_videogames]=useState({
    //     prev_videoG:[],
    // })

    
        
    const sortByButton=(property)=>{
        
        let result=[]
        switch (property) {
            case "optAlfAsc":
                result = props.videogames.sort((a, b) => {
                    return a.nombre > b.nombre;
                });
                break;
            case "optAlfDes":
                result = props.videogames.sort((a, b) => {
                    return a.nombre < b.nombre;
                }); 
                break;
            case "optRatAsc":
                result = props.videogames.sort((a, b) => {
                    return a.rating - b.rating;
                }); 
                break;
            case "optRatDes":
                result = props.videogames.sort((a, b) => {
                    return  b.rating -a.rating ;
                    }); 
                break;
            // case "optDef":
                
            //     // setFilter({...filter,[property]:value})
            //     result = prev_videogames.prev_videoG
            //     break;
            default:
                console.log("entre defaut");
                break;
        }
        
        return result;
    }

    const OrderAlHandler=(event)=>{
        const property =event.target.value;
        // setprev_videogames({...prev_videogames,prev_videoG: props.videogames })
        // //if(property!=="optDef")  
        
        const result=sortByButton(property) 
        
        // console.log(`result ordenado x ${property}`,result)
        dispatch(updateVideoGames(result));
        dispatch(setNextPage());
        dispatch(setPrevPage());
    }


    return (
        <div>
            <div className={styles.cuerpo_ordenamiento}>
                <select className={styles.select_css} title="Ordenamiento" name="option">
                        {/* <option  defaultValue>Por Defecto</option> */}
                        {/* <option  onClick={OrderAlHandler}  value="optDef" id="optDef" >Por Defecto</option> */}
                        <option onClick={OrderAlHandler}  value="optAlfAsc" id="optAlfAsc" >Alfabetico Ascendente</option>
                        <option onClick={OrderAlHandler}  value="optAlfDes" id="optAlfDes" >Alfabetico Descendente</option>
                        <option onClick={OrderAlHandler}  value="optRatAsc" id="optRatAsc" >Rating Ascendente</option>
                        <option onClick={OrderAlHandler}  value="optRatDes" id="optRatDes"  >Rating Descendente</option>
                </select>
            </div>
        </div>
    )
    }

    export default Ordenamiento