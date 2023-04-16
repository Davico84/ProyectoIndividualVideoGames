const {Router} =require('express')

const genresRouter= Router();

const {getGenresHandler,postGenreHandler} =require("../handlers/genresHandlers")

genresRouter.get("/",getGenresHandler);
genresRouter.post("/",postGenreHandler);


module.exports=genresRouter;