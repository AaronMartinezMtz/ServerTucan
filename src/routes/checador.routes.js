const { Router } = require('express');
const { check } = require('express-validator');
const { register, getAllChecadores, aChecador } = require('../controllers/checador.controllers')
const { validarCampos } = require('../middlewares/validar-campos.middleware');


const router = Router();

router.post('/register', [

    check('name', 'El name es requerido.').not().isEmpty(),
    check('value', 'El value es requerido.').not().isEmpty(),
    check('ubication', 'El ubicacion es requerido.').not().isEmpty(),
    validarCampos
], register);

router.get('/all',getAllChecadores);


router.get('/:id',aChecador)

module.exports = router;