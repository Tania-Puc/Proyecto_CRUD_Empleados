const express=require('express');

const router= express.Router();

const conexion=require('./database/db');



//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get('/', (req,res)=>{

    //'SELECT * FROM `empleados` WHERE `fecha_ingreso`>= CURDATE()'
    conexion.query('SELECT id_empleado, nombre, correo, date_format(fecha_ingreso, "%d-%m-%Y") as fecha_ingreso from empleados', (error,results)=>{
        

        
     
        
        if(error){
            throw error;

        }else
        {
             res.render('index', {results:results});



        }
    })
    
}
)

//RUTA PARA CREAR EMPLEADOS
router.get('/create', (req,res)=>{

    res.render('create');
});

//RUTA PARA EDITAR EMPLEADOS

router.get('/edit/:id_empleado', (req,res)=>{
    const id_empleado=req.params.id_empleado;

        
      conexion.query("SELECT * FROM empleados WHERE id_empleado= ?",[id_empleado],(error,results)=>{

        if(error){
            throw error;

        }else
        {
             res.render('edit', {empleados:results[0]});
       

        }
    })

 
});

//RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id_empleado', (req,res)=> {
    const id_empleado=req.params.id_empleado;
    conexion.query("DELETE FROM empleados WHERE id_empleado=?",[id_empleado],(error,results)=>{

        if(error){
         
            throw error;

        }else
        {
             res.redirect('/');       
        }                
    })
})
//Para utilizar los metodos de CRUD
const crud=require('./controllers/crud');
const { Router } = require('express');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports=router;

