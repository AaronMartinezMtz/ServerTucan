const { Router } = require('express');
const { check } = require('express-validator');
const { register, gerAllLocation, aLocation } = require('../controllers/location.controllers')
const { validarCampos } = require('../middlewares/validar-campos.middleware');


const router = Router();

router.post('/register', [
    check('name', 'El date es requerido.').not().isEmpty(),
    check('description', 'El category es requerido.').not().isEmpty(),
    check('especialidad', 'El title es requerido.').not().isEmpty(),
    check('isBulding', 'El description es requerido.').not().isEmpty(),
    check('image', 'El body es requerido.').not().isEmpty(),
    check('map', 'El image es requerido.').not().isEmpty(),
    validarCampos
], register);

router.get('/all',gerAllLocation);


router.get('/:id',aLocation)

module.exports = router;