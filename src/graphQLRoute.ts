import { Application } from 'express'
import { GraphQLSchema, GraphQLSchemaConfig } from 'graphql';
import * as GraphQLHTTP from 'express-graphql';

const schema = new GraphQLSchema({
    query: null
});

const route = (app: Application) => {
    app.use('/graphql', (req, res) => {
        GraphQLHTTP({
            schema: schema,
            graphiql: true
        })(req, res);
    })
}

export default route;