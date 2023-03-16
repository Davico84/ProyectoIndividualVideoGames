const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genrsRouter= require('./genresRouter')
const videogamesRouter= require('./videogameRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames",videogamesRouter)
router.use("/genres",genrsRouter)

module.exports = router;
