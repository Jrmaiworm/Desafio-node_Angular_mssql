const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        cep: { type: DataTypes.STRING, allowNull: false },
        logradouro: { type: DataTypes.STRING, allowNull: false },
        cidade: { type: DataTypes.STRING, allowNull: false },
        estado: { type: DataTypes.STRING, allowNull: false },
        numero: { type: DataTypes.STRING, allowNull: false },
        bairro: { type: DataTypes.STRING, allowNull: false },
    };


    return sequelize.define('Costumer', attributes);
}