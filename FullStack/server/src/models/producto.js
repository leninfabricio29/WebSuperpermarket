const { Model, DataTypes }= require('sequelize');
const sequelize = require('../db/datebase');

class productos extends Model{}
	productos.init({
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    precio: DataTypes.STRING,
    cantidad: DataTypes.STRING,},
        {
        sequelize,
        modelName: "productos"
        }

        )
        module.exports = productos;
 