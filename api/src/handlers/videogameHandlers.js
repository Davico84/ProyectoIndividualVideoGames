const {getAllVideoGamesCtrlr,getVideoGameByIdCtrlr,
       getVideoGameByNameCtrlr, postVideoGameCtrlr}= require("../controllers/videogamesControllers")


const getVideoGamesHandler =async (req,res)=>{
    const {name}=req.query
    
    try {
        const result= name?  await getVideoGameByNameCtrlr(name)
                          :  await getAllVideoGamesCtrlr()
        
        if(result.length>0) res.status(200).json(result)
        else res.status(200).json({msg:"la busqueda no obtuvo resultados"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getVideoGameByIdHandler=async (req,res)=>{
    const {id}= req.params
    const source= isNaN(id) ? "BD" : "API"
    try {
        const result= await getVideoGameByIdCtrlr(id,source) 
        res.status(200).json(result)
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
module.exports ={getVideoGamesHandler,getVideoGameByIdHandler,
    postVideoGameHandler}