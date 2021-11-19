//requiere express
const path = require('path');

const express = require('express');

// ejecutamos servidor
const app = express();

//agraga archivo estatico
//app.use(express.static('public'));

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));
//console.log(__dirname+'public');
//app.use('/static', express.static(__dirname+'/public'));


//----------servidor corritndo en puerto 3030
const port = 3030;

//--------- Rutas de acceso
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});

//-----------ruta en caso de no encontrar las paginas anteriores (switch default)
app.get('*', (req, res) => {
    res.status(404).send('404 not found');
})

// se ejecuta un callback de confirmación. 
app.listen(process.env.PORT||port,() =>console.log(`Servidor corriendo en puerto ${port}`));

