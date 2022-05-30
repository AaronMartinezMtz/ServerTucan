const User = require('../models/user');
const Checador= require('../models/checador')


const userConnected = ( id ) => {

    // const user = await User.findById(id);
    // user.online = true;
    // await user.save();
    // return user;
    return {"hola":"true"}

}


const userDisconnected = ( id ) => {

    // const user = await User.findById(id);
    // user.online = false;
    // await user.save();
    // return user;
    return {"hola":"false"}

}


const validarToChecador = async( value, checador, from ) => {
    
    const checadorA = await Checador.findById(checador)
    if(checadorA.value==value){

        const status = true;
        const user = await User.findById(from)
        const new_value= generateP();
        checadorA.value=new_value;
        await checadorA.save()

        return {status,user,new_value}

    }

    else{
        const status = false;
        return {status};
    }

    

}

const validarToUser = async (value, checador, from) =>{

    const checadorA= await Checador.findById(checador)
    const user= await User.findById(from)
    if(checadorA.value==value){

        const status = true;
        const massage= "Bienvenido " + user.f_name + " " + user.l_name;

        return {status, massage}

    }

    else{
        const status = false;
        const message = "intente de nuevo"
        return {status,message}
    }

    
}


function generateP() {

    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    
    for (i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random()
    * str.length + 1);
    
    pass += str.charAt(char)
    }
    
    return pass;
}
    


module.exports = {
    userConnected,
    userDisconnected,
    validarToChecador,
    validarToUser,

}