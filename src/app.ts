import * as express from 'express';
import GraphQLRoute from './graphQLRoute'

export default class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private async routes() {
        const graphQLRoute = new GraphQLRoute();
        try {
            await graphQLRoute.bindRoute(this.express);
        } catch (ex) {
            console.log(ex);
        }
        
    }

}