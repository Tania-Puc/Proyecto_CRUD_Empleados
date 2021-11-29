
const mysql=require('mysql');

const conexion=mysql.createConnection(
    {
        host:'mysql.db4free.net',
        user: 'estadiama',
        password:'gZX3uWyt$4-tf7Y',
        database:'proyectestadia20',
        
        //Conexion Local de prueba
        /*
        host:'localhost',
        user: 'root',
        password:'contraseña123',
        database:'crud_empleados',
        */
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