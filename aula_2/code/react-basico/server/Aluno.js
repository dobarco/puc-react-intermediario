const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Alunos extends Model{}

Alunos.init({
    nome: {
        type: DataTypes.STRING
    },
    idade: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'aluno'
})

module.exports = Alunos;