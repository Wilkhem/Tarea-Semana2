
import express from 'express';
import { marca } from './rutas/apiMarca.js'
const app = express();
const port = 4000;

app.use ('/api/Marca', marca);

app.listen(port, ()=>{
    
    console.log(`Escuchando en el puerto ${port}`);
});