import React from 'react'
import styles from "./Ordenamiento.module.css"
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import {updateVideoGames,setNextPage,setPrevPage,set_flag_PreVG} from "../../redux/action"; 

const Ordenamiento = (props) => {
    
    const dispatch = useDispatch();
    const video_Game_Prev=useRef([]);
    
const sortByButton=(property)=>{
       
        let result=[]
        const data = props.videogames
        
        switch (property) {
            case "optAlfAsc":
                result =data.sort((a, b) => {
                    return a.nombre > b.nombre;
                });
                
                break;
            case "optAlfDes":
                result = data.sort((a, b) => {
                    return a.nombre < b.nombre;
                }); 
                break;
            case "optRatAsc":
                result = data.sort((a, b) => {
                    return a.rating - b.rating;
                }); 
                break;
            case "optRatDes":
                result = data.sort((a, b) => {
                    return  b.rating -a.rating ;
                    }); 
                break;
            case "optDef":
                result=  video_Game_Prev.current
                 break;
            default:
                console.log("Defaut");
                break;
        }
        
        return result;
    }

const OrderAlHandler=(event)=>{
    if(props.flag===false ) {
        video_Game_Prev.current=[].concat(props.videogames)
        dispatch(set_flag_PreVG())
       console.log("me dispare una VEZ")
    }
    const property =event.target.value;
    let result=[]
    // setTimeout(function(){
        
        result=sortByButton(property) 
        dispatch(updateVideoGames(result));
        dispatch(setNextPage());
        dispatch(setPrevPage());
    // }, 10000);   
    
    
    
}
    return (
        <div>
            <div className={styles.cuerpo_ordenamiento}>
                <select className={styles.select_css} title="Ordenamiento" name="option">
                        {/* <option  defaultValue>Por Defecto</option> */}
                        {/* <option  onClick={OrderAlHandler}  value="optDef" id="optDef" >Por Defecto</option> */}
                        <option onClick={OrderAlHandler}  value="optDef" id="optDef" >Por Defecto</option>
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