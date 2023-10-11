import app from './app.js'
import { sequelize } from './database/postgres.js';

async function main(){
    try{
        await sequelize.sync({force:false});
        console.log("Coneccion establecida")        
        app.listen(3000)
        console.log('Server en el puerto', 3000)
    }catch (error){
        console.error("No se a podido conectar", error)
    }
}

main();
