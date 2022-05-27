const { Schema, model } = require('mongoose');

const LocationSchema = Schema({

    date:{
        type:String,
        requied:true
    },
    category:{
        type:String,
        require:true
    },
    name:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        requied:true
    },
    isBulding:{
        type:Boolean,
        requied:true
    },
    images:{
        type: [String]
    },
    map:{
        type:String,
        requied:true
    },
    clases:{
        type: [{type: Object, requied:true}]
    },
    horario:{
        type:String,
        require:true
    },
    clave:{
        type:String,
        requied:true
    }
})


LocationSchema.method('toJSON', function(){
    const { __v, date,  ...object } = this.toObject();
    // object.uid = _id
    return object;
});


module.exports = model( 'Location', LocationSchema );