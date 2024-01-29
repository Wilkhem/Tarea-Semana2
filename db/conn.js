import pg from 'pg-promise'
const pgp = pg()
const cnstr = `postgresql://postgres:HarrozConHuevo8$@localhost:5432/api_marcas`;
const db = pgp (cnstr);

db.connect()
    .them( ()=>{
        console.log("Conexion Exitosa")
    })
    .catch((err)=>{

        console.log(`Error de conexion ${err}`)
    })

export {db}