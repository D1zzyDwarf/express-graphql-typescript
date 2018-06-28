import { Application } from 'express'
import { GraphQLSchema } from 'graphql';
import * as GraphQLHTTP from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { CourseResolver, FacultyResolver } from './resolver'

export default class GraphQLRoute {

    private schemaPromise: Promise<GraphQLSchema>;

    constructor() {
        this.schemaPromise = this.getSchema();
    }

    private async getSchema(): Promise<GraphQLSchema> {
        const schema = await buildSchema({
            resolvers: [
                CourseResolver,
                FacultyResolver
            ]
        })

        return schema;
    }

    public async bindRoute(app: Application): Promise<void> {
        const schema = await this.schemaPromise;
        app.use('/graphql', (req, res) => {
            GraphQLHTTP({
                schema: schema,
                graphiql: true
            })(req, res);
        })
    }
}