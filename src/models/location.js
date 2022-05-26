const { Schema, model } = require('mongoose');



const LocationSchema = Schema({


    date:{
        type:String,
        requied:true
    },
    name:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        requied:true
    },
    especialidad:{
        type:String,
        requied:true
    },
    isBulding:{
        type:Boolean,
        requied:true
    },
    image:{
        type:String,
        requied:true
    },
    map:{
        type:String,
        requied:true
    },

})

LocationSchema.method('toJSON', function(){
    const { __v, date,  ...object } = this.toObject();
    // object.uid = _id
    return object;
});


module.exports = model( 'Location', LocationSchema );