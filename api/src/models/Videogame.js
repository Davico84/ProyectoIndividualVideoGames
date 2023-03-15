const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion:{
      type:DataTypes.STRING,
      allowNull: false
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false
    },
    fecLan:{
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    rating:{
      type:DataTypes.FLOAT,
      allowNull: false
    },
    create:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
  });
};
