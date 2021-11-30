const conexion=require('../database/db');
const PDF = require('pdfkit');



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

exports.getpdf = (req, res) => {
    const id_empleado = req.body.id_empleado;
    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const fecha_ingreso = req.body.fecha_ingreso;

    var doc = new PDF({ bufferPages: true });
    const filename = `InfoEmpleado${nombre}.pdf`;
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-disposition': `attachment;filename=${filename}`,
    })
    doc.on('data', (data) => { stream.write(data) });
    doc.on('end', () => { stream.end() });
    function jumpLine(doc, lines) {
        for (let index = 0; index < lines; index++) {
            doc.moveDown();
        }
    }
    doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');

    doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(17)
        .fill('#021c27')
        .text('Mérida, Yucatán ' + fecha_ingreso, {
            align: 'right',
        });
    jumpLine(doc, 3)
    doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(15)
        .fill('#021c27')
        .text('A QUIEN CORRESPONDA:', {
            align: 'left',
        });

    jumpLine(doc, 3)


    doc.font('fonts/NotoSansJP-Regular.otf')
    .fontSize(12).fill('#021c27')
    .text('Por medio de la presente y para los fines que pretenda el interesado, hago de su conocimiento que recomiendo al ',
     { align: 'justify',lineGap:20, paragraphGap:10,continued: true })
    .font('fonts/NotoSansJP-Bold.otf')
    
    .fontSize(13).fill('#021c27')
    .text("C. " + nombre,{ lineGap:20,paragraphGap:10,continued:true})
    .font('fonts/NotoSansJP-Regular.otf')
    .fontSize(13).fill('#021c27').
    text(', ya que es una persona Honesta y Responsable en las actividades que durante el periodo que prestó servicios en nuestra empresa le fueron asignadas, por el motivo no tengo ninguna duda en expedir esta recomendación.',
     { align: 'justify', lineGap:20,paragraphGap:10 });

    jumpLine(doc, 2)

    doc.font('fonts/NotoSansJP-Regular.otf')
    .fontSize(12).fill('#021c27')
    .text('Se extiende la presente a solicitud del interesado y para los fines que juzgue convenientes.',
     { align: 'justify',lineGap:20, paragraphGap:10 })
     jumpLine(doc, 3)
     doc.font('fonts/NotoSansJP-Bold.otf')
     .fontSize(10)
     .fill('#021c27')
     .text('FIRMA', { align: 'center',});
     jumpLine(doc, 15)
     doc.lineWidth(1);
     const lineSize = 200;
     const signatureHeight = 700;    
     doc.fillAndStroke('#021c27');
     const endLine1 = 5 + lineSize;
     const startLine2 = endLine1 + 5;
     const endLine2 = startLine2 + lineSize;
     doc.moveTo(startLine2, signatureHeight)
     .lineTo(endLine2, signatureHeight)
     .stroke();
     doc
     .font('fonts/NotoSansJP-Light.otf')
     .fontSize(10)
     .fill('#021c27')
     .text('Tania Monserrar Puc Poot', startLine2, signatureHeight + 5, {
         columns: 1.2,
         columnGap: 0.2,
         height: 40.2,
         width: lineSize,
         align: 'center',});
         jumpLine(doc, 1)
         doc.font('fonts/NotoSansJP-Light.otf')
         .fontSize(10)
         .fill('#021c27')
         .text('Universidad Tecnológica Metropolitana', startLine2, signatureHeight + 20, {
             columns: 1,
             continued:true,
             columnGap: 0,
             height: 60,
             width: lineSize,
             align: 'center',});
             doc.end();
}