require('dotenv').config();
const {API_KEY,URL_MAIN,URL_ID,URL_NAME}= process.env;
const axios = require("axios");
const {Op}= require("sequelize");
const {Videogame, Genre}=require("../db")

const cleanApi =(array)=>array.map(game=>{
                return {
                        id: game.id,
                        nombre: game.name,
                        descripcion: game.description ? game.description:"",
                        
                        plataformas: game.platforms.map(el=> el.platform.name),
                        image: game.background_image,
                        fecLan: game.released,
                        rating:game .rating,
                        genres: game.genres.map(el=> el.name),
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

    const dataDB = await Videogame.findAll({include:{
        model: Genre, attributes:['nombre'],
        through:{ attributes:[]}
     } 
    });


    return [...dataAPI1,...dataAPI2,...dataAPI3,...dataDB]
}
const getVideoGameByNameCtrlr= async(name)=>{
    const resultraw= await axios.get(`${URL_NAME}${name}&key=${API_KEY}`)
    
    const dataAPI=cleanApi(resultraw.data.results)

    const dataDB= await Videogame.findAll({where:{
                                            nombre: { [Op.iLike]: `%${name}%` }}
                                        // , attributes:  {exclude:['PasoAPaso']}
                                        ,include:{
                                            model: Genre, attributes:['nombre'],
                                            through:{ attributes:[]}
                                         } 
                                        });
    


    console.log("dataBD_NAME", dataDB);
    return [...dataAPI,...dataDB]

}
const getVideoGameByIdCtrlr=async(id,source)=>{
    

    try {
        const result=
                source==="API" 
                        ? await axios.get(`${URL_ID}${id}?key=${API_KEY}`)
        
                        : await Videogame.findAll( {where:{ id:id}
                                                                ,include:{
                                                                    model: Genre, attributes:['nombre'],
                                                                    through:{ attributes:[]}
                                                                        }  
                                                                })
         
        return source==="API" ? cleanApi([result.data])
                              : result   
    } catch (error) {
        return  {error:"el ID ingresado no obtuvo coincidencias en la API "}
    }
        
}
const postVideoGameCtrlr =async (nombre,descripcion,plataformas,image,feclan,rating,Arrgenrs)=>{
    console.log("arreglo Generos",Arrgenrs);
    const genrsDB= await Genre.findAll();
    if(genrsDB.length===0) return {error:"No existen generos registros en la BD."} 
    
    const newVideoGame= await Videogame.create({nombre,descripcion,plataformas,image,feclan,rating})
    const regGenrs= await Genre.findAll({where: { nombre: Arrgenrs }})
    
    if(regGenrs.length>0) newVideoGame.addGenre(regGenrs)

    return newVideoGame
}
module.exports ={getAllVideoGamesCtrlr,getVideoGameByIdCtrlr,
    getVideoGameByNameCtrlr, postVideoGameCtrlr}