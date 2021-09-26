
const mysql=require('mysql');

const conexion=mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password:'contraseña123',
        database:'crud_empleados',
    }
);

conexion.connect((error=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la BD MYSQL!');
}))

module.exports=conexion;