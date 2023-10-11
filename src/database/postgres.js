import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('ApiConORM', 'postgres', 'm4rko1000',{
    host: 'localhost',
    dialect: 'postgres',
})