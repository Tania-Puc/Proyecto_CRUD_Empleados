const conexion=require('../database/db');



exports.save=(req,res)=>{
    const nombre=req.body.nombre;
    const correo=req.body.correo;
    const fecha_ingreso=new Date()



    conexion.query('INSERT INTO empleados SET?',{nombre:nombre, correo:correo, fecha_ingreso:fecha_ingreso}, (error,result)=>{

        if(error){
            console.log(error);

        }else{
            res.redirect('/');

        }
    })

    //console.log(correo+nombre+fecha_ingreso);

}

exports.update=(req,res)=>{
    const id_empleado=req.body.id_empleado;
    const nombre=req.body.nombre;
    const correo=req.body.correo;
    const fecha_ingreso=req.body.fecha_ingreso;

    console.log(fecha_ingreso);
    conexion.query("UPDATE `empleados` SET ? WHERE `empleados`.`id_empleado` = ?",[{nombre:nombre,correo:correo, fecha_ingreso:fecha_ingreso},id_empleado], (error,results)=>{

        if(error){
            console.log(error);

        }else{
            res.redirect('/');

        }
    })
}