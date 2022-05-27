const { Schema, model } = require('mongoose');



const ClaseSchema = Schema({


    titulo:{
        type:String,
        requied:true
    },
    horario:{
        type:String,
        require:true
    }

})

ClaseSchema.method('toJSON', function(){
    const { __v, titulo,  ...object } = this.toObject();
    // object.uid = _id
    return object;
});


module.exports = model( 'Clase', ClaseSchema );