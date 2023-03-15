const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
     nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activate:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    create:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
  },{ timestamps:false});
};  