import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/postgres.js";
import { Productos } from './Producto.js';

export const Categorias = sequelize.define('categorias',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },    
    });
    
    Timestamps:false

    Categorias.hasMany(Productos,{
        foreignKey:'id_categoria',
        sourceKey:'id'
    })

    Productos.belongsTo(Categorias,{
        foreignKey:'id_categoria',
        targetId:'id'
    })