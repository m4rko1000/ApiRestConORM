import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/postgres.js";

export const Productos = sequelize.define('productos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    precio:{
            type: DataTypes.INTEGER,
        },    
}
);
Timestamps:false