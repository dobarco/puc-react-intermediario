const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;


const AlunoType = new GraphQLObjectType({
    name: 'Aluno',
    fields: () => ({
        id: { type: GraphQLInt},
        nome: {type: GraphQLString},
        idade: { type: GraphQLInt}, 
        email: { type: GraphQLString},
        telefone: { type: GraphQLString}
    })
})

module.exports = AlunoType;