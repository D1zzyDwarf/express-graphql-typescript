import * as express from 'express';
import graphQLRoute from './graphQLRoute'

export default class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        graphQLRoute(this.express);
    }

}