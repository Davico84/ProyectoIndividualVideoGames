require('dotenv').config();
const {API_KEY,URL_MAIN,URL_ID,URL_NAME}= process.env;
const axios = require("axios");

const {Videogame, Genre}=require("../db")
const cleanApi =(array)=>array.map(game=>{
                return {
                        id: game.id,
                        nombre: game.name,
                        descripcion: "",
                        plataformas: game.platforms ,
                        image: game.background_image,
                        fecLan: game.released,
                        rating:game .rating,
                        create: false,   
                }
})

const getAllVideoGamesCtrlr=async()=>{
    const resultraw1= await axios.get(`${URL_MAIN}?key=${API_KEY}&page=1&page_size=40`)
    const resultraw2= await axios.get(`${URL_MAIN}?key=${API_KEY}&page=2&page_size=40`)
    const resultraw3= await axios.get(`${URL_MAIN}?key=${API_KEY}&page=3&page_size=20`)
    const dataAPI1=cleanApi(resultraw1.data.results)
    const dataAPI2=cleanApi(resultraw2.data.results)
    const dataAPI3=cleanApi(resultraw3.data.results)
    
    const dataBD= await Videogame.findAll()

    return [...dataAPI1,...dataAPI2,...dataAPI3,...dataBD]
}
const getVideoGameByIdCtrlr=()=>{

}
const getVideoGameByNameCtrlr=()=>{

}
const postVideoGameCtrlr =()=>{

}
module.exports ={getAllVideoGamesCtrlr,getVideoGameByIdCtrlr,
    getVideoGameByNameCtrlr, postVideoGameCtrlr}