const express = require('express');
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');

const schema = require('./Schemas/index');

const app = express();
const PORT = 3001;



app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
