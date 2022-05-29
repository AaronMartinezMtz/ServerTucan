

const { Schema, model } = require('mongoose');

// Roles validos
// const rolesValidos = {
//     values: ['ADMIN_ROLE', 'USER_ROLE', 'SITE_ROLE'],
//     message: '{VALUE} no es un rol válido'
// }

const UserSchema = Schema({

    No_control: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    semester:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        default: "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
    },
    online:{
        type: Boolean,
        default:false
    }

});


UserSchema.method('toJSON', function(){
    const { __v, password,  ...object } = this.toObject();
    // object.uid = _id
    return object;
});



module.exports = model( 'User', UserSchema );

