const {getGenresController,PostGenreController}=require("../controllers/genresControler")

const getGenresHandler =async (req,res)=>{
    try {
        const genres= await getGenresController()
        res.status(200).json(genres)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
const postGenreHandler=async (req,res)=>{
    // console.log("lo q recibe body ==>", req.body);
    const {genre} =req.body;
    try {
        const genres= await PostGenreController(genre)
        res.status(200).json(genres)
    } catch (error) {
        // console.log("error en catch:",error.message);
        res.status(400).json({error: error.message})
    }
}


module.exports ={getGenresHandler,postGenreHandler}