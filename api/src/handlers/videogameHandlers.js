const {getAllVideoGamesCtrlr,getVideoGameByIdCtrlr,
       getVideoGameByNameCtrlr, postVideoGameCtrlr}= require("../controllers/videogamesControllers")


const getAllVideoGamesHandler =async (req,res)=>{
    try {
        const result= await getAllVideoGamesCtrlr()
        console.log("dataAPIHandler", result.length);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const getVideoGameByIdHandler=async (req,res)=>{
    try {
        res.status(200).json({msg:"Ruta BY ID"})
    } catch (error) {
         res.status(400).json({error: error.message})
    }
}
const getVideoGameByNameHandler =async (rec,res)=>{
    try {
        res.status(200).json({msg:"Ruta BY NAME"})
    } catch (error) {
         res.status(400).json({error: error.message})
    }
}
const postVideoGameHandler=async(req,res)=>{
    try {
        res.status(200).json({msg:"Ruta POST"})
    } catch (error) {
         res.status(400).json({error: error.message})
    }
}
module.exports ={getAllVideoGamesHandler,getVideoGameByIdHandler,
    getVideoGameByNameHandler,postVideoGameHandler}