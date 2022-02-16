const mysql =  require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    port:'3305',
    user:'root',
    password:'Razer45ypunk',
    database:'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('Conectado a la BD MySQL!')
})

module.exports = conexion