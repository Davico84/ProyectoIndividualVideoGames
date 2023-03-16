const {Router} =require('express');

const videogameRouter= Router();

const {getAllVideoGamesHandler,getVideoGameByIdHandler,
       getVideoGameByNameHandler,postVideoGameHandler
        }= require("../handlers/videogameHandlers")
const {validateVideoGamePost} =require("../middelware/validate")
// query route params?
videogameRouter.get("/", getAllVideoGamesHandler);
videogameRouter.get("/name", getVideoGameByNameHandler);
videogameRouter.get("/:id",getVideoGameByIdHandler );
videogameRouter.post("/",validateVideoGamePost);
// videogameRouter.post("/",validateVideoGamePost, postVideoGameHandler);

module.exports= videogameRouter;