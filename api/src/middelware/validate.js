const validateVideoGamePost=(req,res,next)=>{
    const {nombre,descripcion,plataformas,image,feclan,rating} =req.body;
    if(!nombre) return res.status(400).json({error: "NO ingreso Nombre del Video Juego"})
    if(!descripcion) return res.status(400).json({error: "NO ingreso Descripcion del Video Juego"})
    if(!plataformas) return res.status(400).json({error: "NO ingreso Nombre del Video Juego"})
    if(!image) return res.status(400).json({error: "NO ingreso Imagen del Video Juego"})
    if(!feclan) return res.status(400).json({error: "NO ingreso Fecha de Lanzamiento del Video Juego"})
    if(!rating) return res.status(400).json({error: "NO ingreso Rating del Video Juego"})
     console.log("PASO VALIDACION todo bien");
    next()
}
module.exports = {validateVideoGamePost}

