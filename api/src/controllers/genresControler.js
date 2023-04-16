require('dotenv').config();
const {API_KEY,URL_GEN} =process.env;
const axios = require("axios")

const {Genre}= require("../db")
const cleanApi= (array)=>
    array.map(gen=>{
                 return {  
                            nombre: gen.name,
                            imagen:gen.image_background
                        }
                    })
const getGenresController= async()=>{
    const resultraw= await axios.get(`${URL_GEN}?key=${API_KEY}`)
    const dataAPI= cleanApi(resultraw.data.results)
    
    dataAPI.map(element =>  Genre.findOrCreate({where: {nombre: element.nombre},
        defaults:{ imagen: element.imagen}
           })
    );
    await Promise.all(dataAPI);
    
    // const genresDB= await Genre.findAll({attributes:['id','nombre', 'imagen']})
    const genresDB= await Genre.findAll({
        order: [
          ['id', 'ASC']]})

    return genresDB
}
const PostGenreController= async(genre)=>{
    
    const newGenre = await Genre.findOrCreate({where: {nombre : genre},
        defaults:{ imagen: "imagen"}
           })      
 return newGenre

}



module.exports ={getGenresController,PostGenreController};