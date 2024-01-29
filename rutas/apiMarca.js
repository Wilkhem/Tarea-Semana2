import express from "express"
const marca = express();
import {db} from '../db/conn.js'
let marcas = [{
    nombre : "Revive",
    precio : "1200"
},
{
    nombre : "Zero",
    precio : "1250"
}]

marca.get('', (req,res)=>{

    res.json(marcas);

})

marca.post('', (req,res)=>{

    res.json(marcas);

})

export{ marca}