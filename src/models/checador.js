const { Schema, model } = require('mongoose');



const ChecadorSchema = Schema({

    name:{
        type:String,
        requied:true
    },
    password:{
        type:String,
        requied:true
    },
    value:{
        type:String,
        requied:true
    },
    ubication:{
        type:String,
        require:true
    }

})

ChecadorSchema.method('toJSON', function(){
    const { __v, password,  ...object } = this.toObject();
    // object.uid = _id
    return object;
});


module.exports = model( 'Checador', ChecadorSchema );