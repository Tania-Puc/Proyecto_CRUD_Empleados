const { json } = require('express');
const express=require('express');
const app=express();
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:false}));
app.use(express(json));
app.use('/', require('./router'));
app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'),()=>{
    console.log('Server corriendo en ', app.get('port'))
})
/*app.listen(5000,()=>{
    console.log('Server corriendo en http://localhost:5000')
}       
)*/

