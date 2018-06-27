import * as http from 'http';
import App from './App';
import config from './config'

const app = new App().express;
const httpServer = http.createServer(app);

httpServer.listen(config.app.port, () => {
    console.log(`Listening on port ${config.app.port}`)
})